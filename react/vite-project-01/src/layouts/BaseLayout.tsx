import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

const BaseLayout = ({ children }: {
    children: ReactNode // tipo mas flexible (component, string, number, fragment, array, null, undefined)
}) => {
    return (
        <>
            <Flex gap={10}>
                <Link to="/">Inicio</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/useeffect">useEffect</Link>
                <Link to="/simplecoffe">simpleCoffe</Link>
                <Link to="/formulario">Formulario</Link>
                <Link to="/formularionocontrolado">formularionocontrolado</Link>
                <Link to="/formulariocontrolado">formulariocontrolado</Link>
                <Link to="/accesodocument">accesodocument</Link>
            </Flex>

            {children}

            <div>Footeer</div>
        </>
    )
}

export default BaseLayout