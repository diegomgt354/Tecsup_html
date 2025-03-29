// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Nosotros from './components/Nosotros'
import UseEffectExample from './components/UseEffectExample'
import SimpleCoffe from './testCafe/SimpleCoffe'
import Formulario from './components/Formulario'
import FormNoControlado from './components/FormNoControlado'
import FormControlado from './components/FormControlado'
import AccesoDocument from './components/AccesoDocument'
import BaseOutlets from './outlets/BaseOutlets'
import Error404 from './error/Error404'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <>
    {/* npm i reeact-router-dom */}

    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route element={<BaseOutlets />}>
            <Route path="/" element={<App />} />
            <Route path="/nosotros" element={<Nosotros title='holi' description='boli' funcioncita={() => alert('habla xd')} />} />
            <Route path="/useeffect" element={<UseEffectExample />} />
            <Route path="/simplecoffe" element={<SimpleCoffe />} />
          </Route>
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/formularionocontrolado" element={<FormNoControlado />} />
          <Route path="/formulariocontrolado" element={<FormControlado />} />
          <Route path="/accesodocument" element={<AccesoDocument />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </>
  // </StrictMode>,
)
