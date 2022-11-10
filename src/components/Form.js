import {useState, useEffect} from "react"
import Reloj from "./Reloj"

function Form(){
  const [nombre, setNombre] = useState("")
  const [contador, setContador] = useState(0);

  /* useEffect(()=>{
    console.log(``);
  }) */

  useEffect(()=>{
    console.log(`solo una vez`);
  }, [contador])

  return(
    <>
      <h1>Formulario</h1>
      <form>
        <input 
        type="text"
        value={nombre}
        onChange={(e)=>{
          setNombre(e.target.value);
        }}
        ></input>
      </form>
      <button onClick={(e) => {
        e.preventDefault()
        alert(`el mensaje recibido es ${nombre}`)
      }}>Enviar</button>
      <section>{nombre}</section>
      <h2>Nuevo Contador: {contador}</h2>
      <button onClick={()=> {
        setContador (contador + 1)
      }}>Adicionar</button>
      <Reloj/>
    </>
  )
}

export default Form;