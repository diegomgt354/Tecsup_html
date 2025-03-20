import { useState } from "react"

const Nosotros = ({title, description, funcioncita}:{
  title:string, description:string, funcioncita:()=>void
}) => {

  const[muestra, setMuestra] = useState(false)

  return (
    <>
    <h1>{title}</h1>
    <p>{description}</p>
    <button onClick={funcioncita} >Saludo</button>
    <button onClick={()=>setMuestra((prev)=>!prev)}>Muestra</button>

    {
      muestra && <p>Esto es un parrafo que se muestra y no</p>
    }


    </>
  )
}

export default Nosotros