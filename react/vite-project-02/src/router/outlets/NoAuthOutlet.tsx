import { Navigate, Outlet } from "react-router-dom"
import Storage from "../../shared/hooks/useStorage"

const NoAuthOutlet = () => {

    const session = Storage.get("dummyLoginJson")

    return (
        session ? <Outlet /> : <Navigate to="/login" />
    )
}

export default NoAuthOutlet