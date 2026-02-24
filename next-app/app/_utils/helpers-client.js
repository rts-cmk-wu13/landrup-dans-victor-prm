//"use server"
//import { headers } from 'next/headers'

/* export async function setPageTitle() {
    //let path = usePathname();

    const headerList = headers();
    for (const [key, value] of headerList.entries()) {
        console.log(`"🔴" ${key}: ${value}`);
    }
    let path = headerList.get("landrup-current-path");

    console.log("🔴", path)
    if (path.includes("/activities/")) path = "/activity"
    const subtitle = ` | ${pageTitles.find(item => item.identifier === path).title}` || "";
    const title = `Landdrup Dans${subtitle}`

    return title;
} */


"use client"
import { usePathname } from "next/navigation"
import { pageTitles } from "../_lib/static";

export function setPageTitle() {
    let path = usePathname();

    console.log("🔴", path)
    if (path.includes("/activities/")) path = "/activity"

    //const subtitle = ` | ${pageTitles.find(item => item.identifier === path).title}` || "";
    //const title = `Landdrup Dans${subtitle}`

    const title = pageTitles.find(item => item.identifier === path)?.title || "";

    return title;
}