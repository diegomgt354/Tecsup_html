import { useState } from 'react'
import './App.css'

const App =()=> { 
  
  const [primero, setPrimero] = useState(0)
  const [segundo, setSegundo] = useState(0)
  const [respuesta, setRespuesta] = useState(0)

  const operacion= (opcion:string)=>{

    setRespuesta(opcion=='suma'? primero+segundo
    :opcion=='resta'? primero-segundo
    :opcion=='multiplicacion'? primero*segundo
    :(segundo!=0?primero/segundo:0)) //division

  }

  return (
    <>
      <div>{primero}</div>
      <button onClick={()=>setPrimero((prev)=>prev+1)}>Sumar</button>
      <button onClick={()=>setPrimero((prev)=>prev-1)}>Restar</button>
      <button onClick={()=>setPrimero((prev)=>prev*2)}>Duplicar</button>
      <button onClick={()=>setPrimero((prev)=>prev/2)}>Mitad</button>
      <hr />
      <div>{segundo}</div>
      <button onClick={()=>setSegundo((prev)=>prev+1)}>Sumar</button>
      <button onClick={()=>setSegundo((prev)=>prev-1)}>Restar</button>
      <button onClick={()=>setSegundo((prev)=>prev*2)}>Duplicar</button>
      <button onClick={()=>setSegundo((prev)=>prev/2)}>Mitad</button>
      <hr />
      <div>Resultado</div>
      <div>{respuesta}</div>
      <button onClick={()=>operacion('suma')}>suma</button>
      <button onClick={()=>operacion('resta')}>resta</button>
      <button onClick={()=>operacion('multiplicacion')}>multiplicacion</button>
      <button onClick={()=>operacion('division')}>division</button>
    
    </>
  )
}

export default App