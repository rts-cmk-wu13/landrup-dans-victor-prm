import z from "zod";
import { isEqual } from "lodash";

export function compareFormData(values, prevState) {
    console.log("🔴", values)
    console.log("🟠", prevState?.values)

    /* console.log(schema) */
    const sameAsBefore = isEqual(values, prevState?.values);

    if (prevState?.values === undefined || sameAsBefore) {
        //console.log("☝️ No Changes")
        return prevState;
    } else {
        //console.log("👍 New Data")
    }
}