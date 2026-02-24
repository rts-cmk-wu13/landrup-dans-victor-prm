"use client"
import { useProfileContext } from "@/app/_contexts/user-context"
import LogoutForm from "@/app/home/profile/logout-form";
import { FaUser } from "react-icons/fa";

export default function ProfileHero() {
    const { firstname, lastname, role, username } = useProfileContext();
    const fullname = `${firstname} ${lastname}`
    const userRole = role === "default" ? "member" : role;

    return (
        <div className="bg-dance-e9/90 text-dance-drk flex flex-col gap-3 items-center p-4 -mx-3">
            <FaUser className="size-12 fill-dance-drk" />
            <hgroup className="text-center">
                <h3 className="font-ubuntu text-2xl">{fullname}</h3>
                <small className="font-ubuntu text-base text-dance-reg/70 font-semibold">{username}</small>
            </hgroup>
            <p className="font-redhat capitalize px-3 py-1 bg-dance-drk rounded-2xl text-dance-e9">{userRole}</p>
            <LogoutForm />
        </div>
    )
}