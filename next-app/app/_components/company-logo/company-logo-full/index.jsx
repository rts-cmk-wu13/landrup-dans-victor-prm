import CompanyLogo from ".."

export default function CompanyLogoFull() {
    return (
        <div className="w-full flex flex-col gap-8 items-center mt-8 z-10 overflow-clip">
            <CompanyLogo twclass="animate-fade-in-scale" />
            <div className="relative">
                <h1 className="flex flex-col items-end text-dance-e9 font-genos text-5xl font-bold italic uppercase leading-[66%]">
                    <span className="mr-6 animate-fade-in-ltr">Landrup</span>
                    <span className="animate-fade-in-ltr">Dans</span>
                </h1>
                <hr className="mt-2 border-0 h-0.75 absolute -left-[300%] bg-dance-e9 rounded w-[400%] animate-fade-in-ltr" />
            </div>
        </div>
    )
}