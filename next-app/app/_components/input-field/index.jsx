export default function InputField({ type, name, label, value }) {
    if (!name) throw new Error("Missing name or type")
    if (!type) throw new Error("Missing type or type")

    return (
        <>
            {
                type !== "textarea" ?
                    (
                        <>
                            <label className="flex sr-only" htmlFor={name}>{label}</label>
                            <input className="cust-body-text cust-input w-full placeholder:capitalize" type={type} name={name} id={name} placeholder={label} value={value} />
                        </>
                    )
                    : (
                        <>
                            <label className="flex sr-only" htmlFor={name}>{label}</label>
                            <textarea
                                name={name}
                                id={name}
                                placeholder={label}
                                className="cust-body-text cust-input w-full h-60 placeholder:capitalize"
                            ></textarea>
                        </>
                    )
            }
        </>


    )
}