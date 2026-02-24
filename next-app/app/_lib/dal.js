"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { useId } from "react";

/* --- GENERAL FETCH --- */
export async function fetchFromAPI(fMethod, endpoint, values, secured = false) {
    const cookieStore = await cookies();

    //Second line of defense (apart from proxy)
    if (secured) {
        //Guard clause

        if (!cookieStore.has("landrup-access-token")){
            console.warn("🟠 No active token! Redirecting")
            return redirect("/auth");
        }
    }

    const response = await fetch(`http://localhost:4000${endpoint}`, {
        method: fMethod,
        headers: {
            "content-type": "application/json",
            ...(secured && {
                "Authorization": `Bearer ${cookieStore.get("landrup-access-token").value}`
            })
        },
        ...((fMethod === "POST" && values) && { body: JSON.stringify(values) })
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
    const token = cookieStore?.get("landrup-access-token");
    const userId = cookieStore?.get("landrup-user-id");

    console.log(token, userId)

    //console.log("🔴", token)
    if (!token?.value || !userId?.value) {
        return null
    }


    const user = await fetchFromAPI("GET", `/api/v1/users/${userId.value}`, null, true)
    //console.log("🎁", user)

    // verify token logic here
    return user
}