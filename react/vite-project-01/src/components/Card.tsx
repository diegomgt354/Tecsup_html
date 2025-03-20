import { useState } from "react"

export const Card = ({contG, contadorGeneral}:{contG:number,contadorGeneral:(v:number)=>void}) => {

    const [contador, setContador] = useState(0)

  return (
    <>
    <div>Contador: {contador}</div>
    <button onClick={()=>setContador(contador+1)}>Sumar a contador</button>
    <button onClick={()=>contadorGeneral(contG+1)}>Sumar a contadorGeneral</button>

    <p>Contador general {contG}</p>
    </>
  )
}
