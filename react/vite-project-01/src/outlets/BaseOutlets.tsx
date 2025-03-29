import { Outlet } from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"

const BaseOutlets = () => { // layout para rutas
    return (
        <>
            <div>Este es un titulo antes del outlet</div>
            <BaseLayout>
                <Outlet />
            </BaseLayout>
        </>
    )
}

export default BaseOutlets