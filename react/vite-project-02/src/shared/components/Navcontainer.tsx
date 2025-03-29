import { HStack } from "@chakra-ui/react"
import { ReactElement } from "react"

const Navcontainer = ({ children }: { children: ReactElement }) => {
    return (
        // <HStack justifyContent="space-between" bgColor={['red', 'blue', 'yellow', 'orange']} p="1rem 2rem" >
        <HStack justifyContent="space-around" bgColor={{ base: 'red', '2xl': 'orange' }} p="1rem 2rem" >
            {children}
        </HStack>
    )
}

export default Navcontainer