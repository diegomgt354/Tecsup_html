import { ReactNode } from "react"
import Navbar from "../components/Navbar"
import { Box } from "@chakra-ui/react"

const BaseLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box height={"100vh"}>
                <Navbar />
                {children}
            </Box>
        </>

    )
}

export default BaseLayout