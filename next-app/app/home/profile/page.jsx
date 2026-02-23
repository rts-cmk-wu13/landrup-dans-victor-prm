"use client"
import { useProfileContext } from "@/app/_contexts/user-context"

export default function Page() {
    const { firstname, lastname } = useProfileContext();
    

    const name = `${firstname} ${lastname}`

    return (
        <div>
            <h1>Profile</h1>
            <p>Hello {name}</p>
        </div>

    )
}   