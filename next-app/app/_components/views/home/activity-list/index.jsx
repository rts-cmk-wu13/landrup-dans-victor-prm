"use client";

import { useSearchContext } from "@/app/_contexts/search-context";
import ActivityCard from "@/app/_components/activity-card";
import { formattedClassAge, formattedClassTime } from "@/app/_utils/helpers";

export default function ActivityList({ activities }) {
    const { search } = useSearchContext();

    const filtered = activities.filter(act =>
        act.name.toLowerCase().startsWith(search.toLowerCase()) ||
        act.weekday.toLowerCase().startsWith(search.toLowerCase())
    );

    return (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-12">
            {filtered.map((act, _i) => {
                const subtitle = `${formattedClassTime(act.weekday, act.time)} | ${formattedClassAge(act.minAge, act.maxAge)} år`;
                return (
                    <ActivityCard
                        key={_i}
                        title={act.name}
                        subtitle={subtitle}
                        img={act.asset.url}
                        href={`/home/activities/${act.id}`}
                    />
                );
            })}
        </ul>
    );
}