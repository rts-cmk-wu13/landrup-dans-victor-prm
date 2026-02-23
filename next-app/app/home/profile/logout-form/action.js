"use server"

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function logoutCurrentUser() {
    const cookieStore = await cookies();
    cookieStore.delete("landrup-access-token");
    cookieStore.delete("landrup-user-id");
    redirect("/auth/login");
}