"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

/* export async function fetchFromApi(endpoint, values) {
    const res = await fetch(`http://localhost:4000/api/v1${endpoint}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
    });

    if (!res.ok) {
        return {
            values,
            errors: { form: ["Wrong email or password"] },
        };
    }

    const data = await res.json();
    return data;
}
 */

/* export async function fetchFromApi(fMethod, endpoint, values) {
    const res = await fetch(`http://localhost:4000/api/v1${endpoint}`, {
        method: fMethod,
        headers: { "content-type": "application/json" },
        ...(fMethod === "POST" && { body: JSON.stringify(values) })
    });

    const data = await res.json();
    return data;
} */


export async function fetchFromAPI(fMethod, endpoint, values, secured = false) {
    if (secured) {
        //Second line of defense (apart from proxy)
        const cookieStore = await cookies();
        //Guard clause
        if (!cookieStore.has("accessToken")) return redirect("/no-access");
    }


    const response = await fetch(`http://localhost:4000/api/v1${endpoint}`, {
        method: fMethod,
        headers: { "content-type": "application/json" },
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

    console.log(data)

    return data;
}



export async function postToNewsletter(values) {
    return await fetchFromAPI("POST", "/newsletter", values)
}

export async function postToMessages(values) {
    return await fetchFromAPI("POST", "/messages", values)
}