"use client"

import Image from "next/image";
import ButtonPrimary from "@/app/_components/button-primary";
import { useProfileContext } from "@/app/_contexts/user-context";
import { useEffect } from "react";
import addRemoveUser from "./action";
import { useActionState } from "react";
import { toast } from "react-toastify";


export default function DetailsHero({ activity, img }) {
    const { refresh } = useProfileContext();
    const [state, formAction, isPending] = useActionState(addRemoveUser, {});
    console.log(state)

    useEffect(() => {
        if (state?.success) {
            toast.success(
                userIsEnrolled
                    ? "Du er nu frameldt!"
                    : "Du er nu tilmeldt!"
            );
             refresh();
        }
    }, [state]);

    const { activities, age, id } = useProfileContext();
    const userIsEnrolled = activities.some(act => act.id === Number(activity.id));
    const userIsOfAge = (age >= activity.minAge && age <= activity.maxAge)
    //console.log("userIsEnrolled:", userIsEnrolled);
    //console.log(userIsOfAge)

    return (
        <div className="cust-grid-stack -mx-3">
            <Image
                src={img}
                alt="Details Hero Image Shadow"
                width={600}
                height={600}
                className="object-cover opacity-33 blur-3xl sm:max-h-160 mt-2 w-full"
                priority
            />

            {/*  Background Image */}
            <figure className="
            flex sm:max-h-160 relative overflow-clip rounded-[0_0_2rem_2rem]">
                <Image
                    src={img}
                    alt="Details Hero Image"
                    width={600}
                    height={600}
                    className="object-cover lg:blur-[3px] w-full"
                    priority
                />
            </figure>

            <form className="justify-self-end place-self-end m-8 absolute" action={formAction}>
                <input type="hidden" name="userId" value={id} />
                <input type="hidden" name="activityId" value={activity.id} />
                <input
                    type="hidden"
                    name="isEnrolled"
                    value={userIsEnrolled}
                />
                <ButtonPrimary
                    label={userIsOfAge ?
                        (!userIsEnrolled ? "Tilmeld" : "Frameld") :
                        "Du er ude af aldersgruppen"}
                    className={"ml-auto px-8"}
                    disabled={!userIsOfAge}
                />
            </form>

        </div>
    )
}
