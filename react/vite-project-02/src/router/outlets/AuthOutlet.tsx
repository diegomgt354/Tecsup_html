import { Navigate, Outlet } from "react-router-dom"
import Storage from "../../shared/hooks/useStorage"

const AuthOutlet = () => {

    const session = Storage.get("dummyLoginJson")

    return (
        session ? <Navigate to="/" /> : <Outlet />
    )
}

export default AuthOutlet