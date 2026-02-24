import { logoutCurrentUser } from "./action"
import { TbLogout } from "react-icons/tb";


export default function LogoutForm() {
    return (
        <form
            action={logoutCurrentUser}
            className="mt-8"
        >
            <button
                type="submit"
                className="cust-button min-w-30 flex gap-2 ring-2 ring-dance-drk text-dance-drk"
            >
                Log out <TbLogout />
            </button>
        </form>
    )
}