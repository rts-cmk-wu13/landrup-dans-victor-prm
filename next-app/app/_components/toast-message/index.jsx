//Unused for nnow, might get back to this later
import { FaCheckCircle } from "react-icons/fa";

export default function ToastMessage({ message }) {
    console.log(message)
    return (
        // using a grid with 3 columns 
        <div className="cust-shape cust-container flex gap-2 items-center p-2 bg-dance-e9/50 w-50 backdrop-blur-md">
            <figure className="bg-dance-ff rounded-4xl p-px">
                <FaCheckCircle className="relative size-6 fill-green-500 " />
            </figure>
            <h3 className="font-ubuntu text-dance-drk font-semibold">{message || "Message"}</h3>
        </div>
    );
}