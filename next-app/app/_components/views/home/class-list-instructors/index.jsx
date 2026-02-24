import { fetchFromAPI } from "@/app/_lib/dal"
import SpinningLoader from "@/app/_components/spinning-loader";
import { useState, useEffect } from "react";
import { formattedClassTime,formattedClassAge } from "@/app/_utils/helpers";
import ClassCard from "../class-card";

export default function ClassListInstructors() {
    const [activities, setActivities] = useState()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchInstructorActivities() {
            const data = await fetchFromAPI("GET", "/api/v1/activities")
            const filteredData = await data.filter(act => act.instructorId === 2)
            setActivities(filteredData)
            setLoading(false)
        }
        fetchInstructorActivities();
    }, [])

    if (isLoading) return (
        <SpinningLoader />
    )
    if (!activities) return <p>No profile activities</p>

    console.log(activities)

    return (
        <>
            <h2 className="text-2xl font-ubuntu font-medium ">Mine hold</h2>
            {activities ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-12">
                    {
                        activities.map((act) => {
                            const subtitle = `${formattedClassTime(act.weekday, act.time)} | ${formattedClassAge(act.minAge, act.maxAge)} år`;

                            return (
                                <ClassCard
                                    key={act.id}
                                    title={act.name}
                                    subtitle={subtitle}
                                    instructor={true}
                                    maxCapacity={act.maxParticipants}
                                    participants={act.users}
                                />
                            );
                        })
                    }
                </ul>
            ) : (
                <div className="cust-body-text">
                    <p>Du er ikke tilmeldt nogen hold</p>
                    <Link className="text-dance-acc cursor-pointer inline-flex gap-2 items-center hover:opacity-70" href={"/home/activities"}>Se tilgængelige hold <FaArrowRight /></Link>
                </div>
            )}
        </>
    )
}