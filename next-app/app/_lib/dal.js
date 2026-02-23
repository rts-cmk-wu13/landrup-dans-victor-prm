"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

/* --- GENERAL FETCH --- */
export async function fetchFromAPI(fMethod, endpoint, values, secured = false) {
    if (secured) {
        //Second line of defense (apart from proxy)
        const cookieStore = await cookies();
        //Guard clause
        if (!cookieStore.has("accessToken")) return redirect("/no-access");
    }

    const response = await fetch(`http://localhost:4000${endpoint}`, {
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

export async function getSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get("landrup-access-token")
  console.log("🔴",token)
  if (!token) {
    return null
  }
  // verify token logic here
  return { user: "Chandan" }
}