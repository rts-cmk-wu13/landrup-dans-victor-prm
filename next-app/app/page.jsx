import ActivityCard from "./_components/activity-card";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between ">
      <div className="text-dance-e9 flex flex-col gap-2">
        <h1 className="font-genos text-5xl font-bold italic text-linear-accent">LANDRUP</h1>
        <h2 className="font-ubuntu text-3xl ">Ubuntu</h2>
        <p className="font-redhat text-dance-ff">
          På børneholdene leger vi os ind i dansens verden gennem musik, bevægelse og fantasi.
          Undervisningen styrker motorik, rytme og kropsbevidsthed i trygge rammer.
          Fokus er på danseglæde, fællesskab og aktiv bevægelse, hvor alle kan være med.
        </p>

        <ul className="grid grid-cols-[repeat(auto-fill,minmax(clamp(240px,20vw,400px),1fr))] gap-6">
          <ActivityCard title="Junior Fitness Dance" description="10-12 år" />
          <ActivityCard title="Tango for begyndere" description="10-12 år" />
          <ActivityCard title="Tango for øvede" description="10-12 år" />
          <ActivityCard title="Zumba" description="10-12 år" />
          <ActivityCard title="Zumba" description="10-12 år" />
          <ActivityCard title="Zumba" description="10-12 år" />
        </ul>
      </div>
    </div>

  );
}
