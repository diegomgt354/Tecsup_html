// npm i react-hook-form 

import { useForm } from "react-hook-form";
import './formulario.css'
import { useEffect, useState } from "react";

type Elemento = {
  nombre: string;
  apellido: string;
}


const Formulario = () => {

  const {
    register: fm_register,
    handleSubmit: fm_handleSubmit,
    watch: fm_watch,
    setValue: fm_setValue,
    getValues: fm_getValues,
    reset: fm_reset,
    control: fm_control, // solo cuando register no es soportado
    formState: { errors, isDirty, isValid, isSubmitting }
  } = useForm<Elemento>();

  const [personas, setPersonas] = useState<Array<Elemento>>([])

  const ElementoBase = {
    nombre: '',
    apellido: ''
  }

  useEffect(() => {
    console.log(isDirty) // pasa a true cuando se modifica un valor cualquiera
    console.log(isSubmitting) // mientras el formulario se esta mandando
  }, [isSubmitting])

  const onSave = (data: Elemento) => {
    setPersonas((prev) => [...prev, data])
    fm_reset(ElementoBase)
  }

  const onClear = () => {
    fm_reset(ElementoBase)
  }

  const deletePersona = (index: number) => {
    setPersonas((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <>
      <div className="formulario">
        <div>
          <input type="text" {...fm_register("nombre", { required: "El nombre es obligatorio" })} />
          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>
        <div>
          <input type="text" {...fm_register("apellido", { required: "El apellido es obligatorio" })} />
          {errors.apellido && <p>{errors.apellido.message}</p>}
        </div>


        <p>Nombre: {fm_watch("nombre") || "null"} | Apellido: {fm_watch("apellido") || "null"}</p>
        <p>{isValid ? "campos completos" : "campos incompletos"}</p>
        <button onClick={fm_handleSubmit(onSave)}>Registrar</button>
        <button onClick={onClear}>Limpiar</button>

        <main>
          {personas.map((persona, index) => (
            <div className="per">
              <p key={persona.nombre}>
                {persona.nombre} {persona.apellido}
              </p>
              <a onClick={() => deletePersona(index)}>Eliminar</a>
            </div>
          ))}
        </main>

      </div>


    </>
  )
}

export default Formulario