import { Box, Button, HStack, Image, Text, useDisclosure } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import Storage from "../hooks/useStorage"
import { DummySession } from "../../declarations/DummyJson"
import Navcontainer from "./Navcontainer"
import ShoppingCardDrawer from "./ShoppingCardDrawer"
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {

    const session = Storage.get("dummyLoginJson") as DummySession

    const navigate = useNavigate()

    const logout = () => {
        Storage.remove("dummyLoginJson")
        login()
    }

    const login = () => {
        navigate("/login")
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <Navcontainer>
            <>
                {session ?
                    <HStack>
                        <Image w="40px" src={session.image} alt={session.username} />
                        <Text>{session.username}</Text>
                    </HStack>
                    : <Box></Box>}
                <HStack>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    {
                        session ?
                            <Button onClick={logout}>Logout</Button>
                            :
                            <Button onClick={login}>Login</Button>
                    }
                    <Link to={'#'} onClick={onOpen}>
                        <FaShoppingCart />
                    </Link>
                </HStack>



                <ShoppingCardDrawer onClose={onClose} isOpen={isOpen} />
            </>
        </Navcontainer>
    )
}

export default Navbar