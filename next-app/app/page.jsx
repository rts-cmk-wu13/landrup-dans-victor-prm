import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="text-amber-100">
          <h1 className="font-genos text-5xl font-bold italic">LANDRUP</h1>
          <h2 className="font-ubuntu text-3xl ">Ubuntu</h2>
          <p className="font-redhat">
            På børneholdene leger vi os ind i dansens verden gennem musik, bevægelse og fantasi.
            Undervisningen styrker motorik, rytme og kropsbevidsthed i trygge rammer.
            Fokus er på danseglæde, fællesskab og aktiv bevægelse, hvor alle kan være med.
          </p>
        </div>

      </main>
    </div>
  );
}
