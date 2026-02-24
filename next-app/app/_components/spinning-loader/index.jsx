import { PiSpinnerBold } from "react-icons/pi";

export default function SpinningLoader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-dance-reg/25">
            <PiSpinnerBold className="fill-dance-e9 size-8 animate-spin" />
        </div>
    )
}