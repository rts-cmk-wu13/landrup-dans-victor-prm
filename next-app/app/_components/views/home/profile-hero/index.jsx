"use client"
import { useProfileContext } from "@/app/_contexts/user-context"
import LogoutForm from "@/app/home/profile/logout-form";
import { FaUser } from "react-icons/fa";

export default function ProfileHero() {
    /* const { firstname, lastname } = useProfileContext();
   const name = `${firstname} ${lastname}` */
   
    return (
        <div className="bg-dance-e9 text-dance-drk flex flex-col gap-3 items-center p-4 -mx-3 ">
            <FaUser className="size-12" />
            <h3 className="font-ubuntu text-2xl">Name</h3>
            <p className="cust-body-text">Role</p>
            <LogoutForm />
        </div>
    )
}