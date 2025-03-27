import { Box, Button, FormControl, FormLabel, HStack, Input, VStack } from "@chakra-ui/react"
import React from "react"
import useDummyJson from "../../shared/hooks/useDummyJson"
import Storage from "../../shared/hooks/useStorage"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const dummyLogin = useDummyJson
    const navigate = useNavigate()

    const iniciarSesion = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formulario = e.currentTarget

        if (formulario) {
            const data = new FormData(formulario)
            const { username, password } = Object.fromEntries(data.entries()) as {
                username: string,
                password: string
            }
            const dummyLoginJson = await dummyLogin.login(username, password)

            console.log(dummyLoginJson)
            if (dummyLoginJson.accessToken) {
                // localStorage.setItem("dummyLoginJson", JSON.stringify(dummyLoginJson))
                Storage.set("dummyLoginJson", dummyLoginJson)
                navigate("/")
            } else {
                toast.error('Credenciales incorrectas')
            }




        }

    }

    return (
        <VStack>
            <HStack h="100vh">
                <Box as="form"
                    bgColor={"blue.200"} w={500}
                    onSubmit={iniciarSesion}>
                    <FormControl>
                        <FormLabel>Usuario:</FormLabel>
                        <Input type="text" name="username" required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password:</FormLabel>
                        <Input type="password" name="password" required />
                    </FormControl>
                    <Button type="submit" mt="1em" w={"fit-content"}>Ingresar</Button>
                </Box>
            </HStack>
        </VStack>
    )
}

export default Login