"use client"
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const ProfileContext = createContext(null)

//Context Provider
export default function ProfileContextProvider({ children }) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/users/7`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo3LCJ1c2VybmFtZSI6InVzZXIzIiwicGFzc3dvcmQiOiIkMmEkMTUkT01EVS44ZXRSaGY1N2ZEbVJudS9JdWhpbk5NUUpsSjh1amRVSm94RzRKWXZwdFVMNFdDZW0iLCJmaXJzdG5hbWUiOiJNYXJ0aW4iLCJsYXN0bmFtZSI6IlBvdWxzZW4iLCJhZ2UiOjIxLCJyb2xlIjoiZGVmYXVsdCIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTQ6MzAuNDA2WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTQ6MzAuNDA2WiJ9LCJpYXQiOjE3NzE4NTMyNTUsImV4cCI6MTc3MTg1Njg1NX0.T8qeX5M8_LbLOd7LQGKpH8XjheFiX_ZS3ZCpBKVRDQQ`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <ProfileContext.Provider
            value={data}
        >
            {children}
        </ProfileContext.Provider>
    )
}

//Custom hook
export function useProfileContext() {
    const context = useContext(ProfileContext)
    console.log(context)
    if (!context) {
        throw new Error("useProfileContext must be used within a ProfileContextProvider")
    }
    return context;
}

