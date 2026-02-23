import { logoutCurrentUser } from "./action"
import { TbLogout } from "react-icons/tb";


export default function LogoutForm() {
    return (
        <form
            action={logoutCurrentUser}
            className=""
        >
            <button
                type="submit"
                className="cust-button min-w-30 flex gap-1
          bg-dance-00 text-dance-e9"
            >
                Log out <TbLogout />
            </button>
        </form>
    )
}