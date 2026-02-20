export default function PageContainer({ children }) {
    return (
        <div className="flex flex-col gap-12 mx-auto max-w-[1360] min-h-screen">
            {children}
        </div>
    )
}