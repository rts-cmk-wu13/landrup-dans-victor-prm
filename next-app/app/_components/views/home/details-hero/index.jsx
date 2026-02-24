"use client"

import Image from "next/image";
import ButtonPrimary from "@/app/_components/button-primary";
import { useEffect } from "react";
import { fetchFromAPI } from "@/app/_lib/dal";
import { useProfileContext } from "@/app/_contexts/user-context";

export default function DetailsHero({ activity, img }) {
    //const [event, setEvent] = useEffect([])

    /*  useEffect(async function fetchEvents() {
         //fetchFromAPI("POST","/api/v1/users/7/activities/4", {})
         const events = await fetchFromAPI("GET", "/api/v1/activities/2")
         setEvent(events)
         //fetchEvents()
     }, []) */

    const profile = useProfileContext();
    console.log(profile)
    const { activities, age } = useProfileContext();


    const handleClick = () => {
        console.log(activity)
    }


    const userIsEnrolled = activities.some(act => act.id === Number(activity.id));
    const userIsOfAge = (age >= activity.minAge && age <= activity.maxAge)

    console.log("userIsEnrolled:", userIsEnrolled);

    console.log(userIsOfAge)



    return (
        <div className="cust-grid-stack -mx-3">
            <Image
                src={img}
                alt="Details Hero Image Shadow"
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
                    alt="Details Hero Image"
                    width={600}
                    height={600}
                    className="object-cover lg:blur-[3px] w-full"
                    priority
                />
            </figure>

            <div className="justify-self-end place-self-end m-8 absolute">
                <ButtonPrimary
                    label={userIsOfAge ? "Tilmeld" : "Du er ude af aldersgruppen"}
                    onClick={handleClick}
                    className={"ml-auto px-8"}
                    disabled={!userIsOfAge}
                />
             
            </div>

        </div>
    )
}
