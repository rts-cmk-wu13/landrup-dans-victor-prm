"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

/* --- GENERAL FETCH --- */
export async function fetchFromAPI(fMethod, endpoint, values, secured = false) {
    const cookieStore = await cookies();

    //Second line of defense (apart from proxy)
    if (secured) {
        //Guard clause
        if (!cookieStore.has("landrup-access-token")) return redirect("/auth");
    }

    const response = await fetch(`http://localhost:4000${endpoint}`, {
        method: fMethod,
        headers: {
            "content-type": "application/json",
            ...(secured && {
                authorization: `Bearer ${cookieStore.get("landrup-access-token")}`
            })
        },
        ...(fMethod === "POST" && { body: JSON.stringify(values) })
    });

    if (!response.ok) {
        throw new Error("🤦‍♂️ Something went wrong on our end!")
        /* return {
            values,
            errors: { form: ["Wrong email or password"] },
        }; */
    }
    const data = await response.json();

    /* console.log(data) */

    return data;
}

export async function getSession() {
    const cookieStore = await cookies()
    const token = cookieStore.get("landrup-access-token")
    console.log("🔴", token)
    if (!token) {
        return null
    }

    // verify token logic here
    return { user: "Chandan" }
}