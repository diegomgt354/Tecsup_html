// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SimpleCoffe from './assets/testCafe/SimpleCoffe'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <>
    {/* <App /> */}
    {/* <Nosotros title='holi' description='boli' funcioncita={()=>alert('habla xd')}/> */}
    {/* <Nosotros title='saludo' description='boludo' funcioncita={()=>alert('como estas u.u')}/> */}
    {/* <UseEffectExample /> */}
    <SimpleCoffe />
  </>
  // </StrictMode>,
)
