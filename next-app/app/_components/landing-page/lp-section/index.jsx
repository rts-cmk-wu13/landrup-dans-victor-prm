export default function LandingSection({ title, children }) {
    return (
        <section className="flex flex-col gap-4 text-dance-e9 w-full mb-20">
            {title && <h2 className="font-ubuntu text-4xl font-medium">{title}</h2>}
            {children}
        </section>
    )
}