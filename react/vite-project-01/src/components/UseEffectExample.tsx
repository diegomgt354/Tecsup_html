import { useEffect, useState } from "react"
import { Producto } from "../declarations/ExampleInterface"



const UseEffectExample = () => {

    const [elementos, setElementos] = useState<Array<Producto>>([])

    const [loading, setLoading] = useState(false)

    const traerElementos = async()=>{

        setLoading(true)

        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()

        setElementos(data.products)
        console.log(data.products)

        setLoading(false)

    }


    useEffect(()=>{
        traerElementos()
    },[])

  return (
    <>

        {
            loading ? <p>Cargando...</p>
            :
            <table>
                <thead>
                    <th>Img</th>
                    <th>Title</th>
                    <th>Description</th>
                </thead>
                <tbody>
                {elementos.map((elemento)=>(
                    <tr key={elemento.id}>
                        <td><img src={elemento.thumbnail} alt="" /></td>
                        <td>{elemento.title}</td>
                        <td>{elemento.description}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        }
    </>
  )
}

export default UseEffectExample