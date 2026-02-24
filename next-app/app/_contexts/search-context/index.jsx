"use client"
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

//https://www.facebook.com/groups/ReactJsDevelopersGroup/posts/3252611634913049/
export const SearchContext = createContext(null)

//Context Provider
export default function SearchContextProvider({ children }) {
    const [search, setSearch] = useState("");
    const [isLoading, setLoading] = useState(false); // optional

    return (
        <SearchContext.Provider value={{ search, setSearch, isLoading, setLoading }}>
            {children}
        </SearchContext.Provider>
    );
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

