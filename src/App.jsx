import Texto from "./components/Texto"
import Formulario from "./components/Formulario"
import './index.css'
import {useState} from 'react'
const App = () => {
const [formularios,useFormularios] = useState([])
const [formularioRegisto , useFormularioRegisto] = useState([])
  return(
    <main>
    <div className="contenedor_1">
    <div className="caja_padre_1">
    <Texto
    formularioRegisto={formularioRegisto}
    useFormularioRegisto={useFormularioRegisto}
    />
    <Formulario
    formularios={formularios}
    useFormularios={useFormularios}
    formularioRegisto={formularioRegisto}
    />
    </div>
    </div>
    </main>
  )
}

export default App