"use client"
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { getSession } from "@/app/_lib/dal";

import SpinningLoader from "@/app/_components/spinning-loader";

export const ProfileContext = createContext(null)

//Context Provider
export default function ProfileContextProvider({ children }) {
    const [data, setData] = useState("test")
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchSession() {
            const data = await getSession();
            setData(await data)
            setLoading(false)
        }
        fetchSession();
    }, [])

    if (isLoading) return (
        <SpinningLoader />
    )
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

