"use client"
import { useState } from "react"
import { IoSearch } from "react-icons/io5";

import { IoClose } from "react-icons/io5";


export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }



    return (
        <label className={`h-fit cust-grid-stack justify-self-end items-center ${isOpen ? "w-full max-w-100" : ""}`} htmlFor="search">
            <button className="relative z-10 cursor-pointer size-fit justify-self-end mr-3" onClick={toggle}>

                {isOpen ?
                    <IoClose className=" fill-dance-e9 size-5" /> :
                    <IoSearch className=" fill-dance-e9 size-5" />}
            </button>

            <input
                type="text"
                name="search"
                id="search"
                className={
                    `cust-body-text cust-input bg-dance-e9/30 backdrop-blur-md rounded-[1rem_1rem_1px_1rem]
                     justify-self-end transition ${isOpen ? "w-full opacity-100 duration-300" : "w-0 px-0 opacity-0 duration-0"}`} />

        </label>

    )
}