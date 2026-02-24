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

        if (!cookieStore.has("landrup-access-token")) {
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

    console.log(response)

    if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Request failed");
    }

    // If there's no content, don't try to parse JSON
    const contentLength = response.headers.get("content-length");
    if (response.status === 204 || contentLength === "0") {
        return { success: true };
    }

    // Some APIs return 200 but empty body
    const text = await response.text();
    if (!text) {
        return { success: true };
    }

    return JSON.parse(text);
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