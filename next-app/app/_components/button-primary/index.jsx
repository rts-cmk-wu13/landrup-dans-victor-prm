"use client"

export default function ButtonPrimary({ label, onClick, className, }) {
    return (
        //w-fit z-10 justify-self-end place-self-end m-8
        <button className={`cust-container cust-button cust-acc-gradient text-dance-reg p-2 min-w-40 ${className}`} onClick={() => onClick()}>{label}</button>
    )
} 