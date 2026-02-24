import ClassCard from "../class-card";
import { formattedClassTime, formattedClassAge } from "@/app/_utils/helpers";

export default function ClassListMembers({ activities }) {
    return (
        <>
            <h2 className="text-2xl font-ubuntu font-medium ">Tilmeldte hold</h2>
            {activities ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-12">
                    {
                        activities.map((act) => {
                            const subtitle = `${formattedClassTime(act.weekday, act.time)} | ${formattedClassAge(act.minAge, act.maxAge)} år`;

                            return (
                                <ClassCard
                                    key={act.id}
                                    role={role}
                                    title={act.name}
                                    subtitle={subtitle}
                                />
                            );
                        })
                    }
                </ul>
            ) : (
                <div className="cust-body-text">
                    <p>Du er ikke tilmeldt nogen hold</p>
                    <Link className="text-dance-acc cursor-pointer inline-flex gap-2 items-center hover:opacity-70" href={"/home/activities"}>Se tilgængelige hold <FaArrowRight /></Link>
                </div>
            )}
        </>
    )
}










