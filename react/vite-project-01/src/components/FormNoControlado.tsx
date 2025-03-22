const FormNoControlado = () => {

    const mostrarDatosNoControlados = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formulario = event.currentTarget

        const formData = new FormData(formulario)
        const data = Object.fromEntries(formData.entries())

        console.log(data)

    }

    return (
        <>
            <form onSubmit={mostrarDatosNoControlados}>
                <div>
                    <label htmlFor="">Correo</label>
                    <input type="text" name="email" id="" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default FormNoControlado