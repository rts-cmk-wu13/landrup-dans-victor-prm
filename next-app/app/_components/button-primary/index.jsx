"use client"

export default function ButtonPrimary({ label, submit = true, onClick, disabled, className }) {
    return (
        <button
            type={submit ? "submit" : "button"}
            className={`cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40 disabled:bg-none disabled:bg-dance-e9/66 disabled:text-dance-00/75 disabled:opacity-66 disabled:ring-dance-6f disabled:cursor-not-allowed ${className}`}
            {...(onClick && { onClick })} // Attach onClick if passed as props
            {...(disabled && { disabled })} // Attach disabled if passed as props
        >
            {label}
        </button>
    )
} 