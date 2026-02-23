export default function InputField({ type, name, label, value, defaultValue, errors, className }) {
    //Guard Clauses
    if (!name) throw new Error("Missing name or type")
    if (!type) throw new Error("Missing type or type")

    console.log(errors)

    const ErrorMessage = ({ msg, abs = true }) => {
        return (
            <strong className={`${abs && "absolute -top-1.5 right-0"}  px-2 py-1 rounded-xl text-dance-e9 border border-red-500 font-semibold bg-red-500/50 backdrop-blur-xs text-sm min-w-40`}>🔴 {msg}</strong>
        )
    }


    return (
        <>
            {
                type !== "textarea" ?
                    (
                        <label className="relative" htmlFor={name}>
                            <span className="sr-only">{label}</span>
                            <input  className={`cust-body-text cust-input w-full placeholder:capitalize ${className}`} type={type} name={name} id={name} placeholder={label} value={value} defaultValue={defaultValue} />
                            {errors && <ErrorMessage msg={errors[0]} />}
                        </label>

                    )
                    : (
                        <label className="relative" htmlFor={name}>
                            <span className="sr-only">{label}</span>
                            <textarea
                                
                                name={name}
                                id={name}
                                placeholder={label}
                                value={value} defaultValue={defaultValue}

                                className={`cust-body-text cust-input block w-full h-60 placeholder:capitalize ${className}`}
                            ></textarea>
                            {errors && <ErrorMessage msg={errors[0]} />}
                        </label>
                    )
            }
        </>


    )
}