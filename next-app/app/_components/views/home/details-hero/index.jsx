"use client"

import Image from "next/image";
import ButtonPrimary from "@/app/_components/button-primary";
import { useEffect } from "react";
import { fetchFromAPI } from "@/app/_lib/dal";

export default function DetailsHero({ activityID, img }) {
    //const [event, setEvent] = useEffect([])

    /*  useEffect(async function fetchEvents() {
         //fetchFromAPI("POST","/api/v1/users/7/activities/4", {})
         const events = await fetchFromAPI("GET", "/api/v1/activities/2")
         setEvent(events)
         //fetchEvents()
     }, []) */

    const handleClick = () => {
        console.log(activityID)
    }

    return (
        <div className="cust-grid-stack -mx-3">
            <Image
                src={img}
                alt="Landrup Dans Logo"
                width={600}
                height={600}
                className="object-cover opacity-33 blur-3xl sm:max-h-160 mt-2 w-full"
                priority
            />

            {/*  Background Image */}
            <figure className="
            flex sm:max-h-160 relative overflow-clip rounded-[0_0_2rem_2rem]">
                <Image
                    src={img}
                    alt="Landrup Dans Logo"
                    width={600}
                    height={600}
                    className="object-cover blur-[1px] w-full"
                    priority
                />
            </figure>
            <ButtonPrimary
                label="Tilmeld"
                className={"justify-self-end place-self-end m-8 cust-button absolute"}
                onClick={handleClick}
            />
        </div>
    )
}
