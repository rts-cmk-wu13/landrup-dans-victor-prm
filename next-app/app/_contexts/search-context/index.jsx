"use client"
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { redirect } from "next/dist/server/api-utils";
import { PiSpinnerBold } from "react-icons/pi";

//https://www.facebook.com/groups/ReactJsDevelopersGroup/posts/3252611634913049/
export const SearchContext = createContext(null)

//Context Provider
export default function SearchContextProvider({ children }) {
    const [data, setData] = useState("test")
    const [isLoading, setLoading] = useState(true)

  /*   useEffect(() => {
        async function fetchSession() {
            const data = await getSession();
            setData(await data)
            setLoading(false)
        }
        fetchSession();
    }, []) */

    if (isLoading) return (
        <div className="fixed inset-0 flex items-center justify-center">
            <PiSpinnerBold className="fill-dance-e9 size-8 animate-spin" />
        </div>
    )
    if (!data) return redirect("/auth")

    return (
        <SearchContext.Provider
            value={data}
        >
            {children}
        </SearchContext.Provider>
    )
}

//Custom hook
export function useSearchContext() {
    const context = useContext(SearchContext)
    console.log(context)
    if (!context) {
        throw new Error("useSearchContext must be used within a SearchContextProvider")
    }
    return context;
}

