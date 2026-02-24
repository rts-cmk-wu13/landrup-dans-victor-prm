"use client"
import ProfileHero from "@/app/_components/views/home/profile-hero";
import { useProfileContext } from "@/app/_contexts/user-context";


import ClassListMembers from "@/app/_components/views/home/class-list-members";
import ClassListInstructors from "@/app/_components/views/home/class-list-instructors";

export default function Page() {
    const { activities, role } = useProfileContext()


    console.log("HEY", activities)

    return (
        <div className="pb-32 text-dance-e9 flex flex-col gap-2">
            <title>Profil</title>
            <ProfileHero />

            {
                role === "default" ? (
                    <ClassListMembers activities={activities} />
                ) : (
                    <ClassListInstructors activities={activities} />
                )
            }

        </div >

    )
}   