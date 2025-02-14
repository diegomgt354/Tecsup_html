import { useState } from 'react'
import './App.css'
import Prueba from './components/Prueba'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={()=>setCount(count+1)}>Sumar</button>
      <Prueba valor={count}/>
    </>
  )
}

export default App
