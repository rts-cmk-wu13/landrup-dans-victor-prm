"use client"

export default function ButtonPrimary({ label, submit = true, onClick, disabled, className }) {
    return (
        <button
            type={submit ? "submit" : "button"}
            className={`cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40 disabled:bg-none disabled:bg-dance-99 disabled:text-dance-00/75 disabled:opacity-75 ${className}`}
            {...(onClick && { onClick })} // Attach onClick if passed as props
            {...(disabled && { disabled })} // Attach disabled if passed as props
        >
            {label}
        </button>
    )
} 