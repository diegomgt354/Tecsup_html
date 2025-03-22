import React, { useEffect, useState } from "react"

const FormControlado = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const mostrarDatosControlados = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    useEffect(() => {
        console.log('email', email)
        console.log('password', password)
    }, [email, password])


    return (
        <>
            <form onSubmit={mostrarDatosControlados}>
                <div>
                    <label htmlFor="">Correo</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default FormControlado