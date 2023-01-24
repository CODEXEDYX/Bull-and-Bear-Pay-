import '../style/Texto.css'
import '../style/Formulario_registro.css'
import cerar from  '../../src/assets/img/cerrar.png'
import ExitoRegistro from './ExitoRegistro'
import ErrorRegistro from './ErrorRegistro'
import {useState} from 'react'
const Texto = ({ useFormularioRegisto, formularioRegisto}) => {
const [formularioRegistro, useformularioRegistro] = useState(false)
const [errorRegistro , useErrorRegistro] = useState(false)
const [exitoRegistro , useExitoRegistro] = useState(false)
const [nombre , useNombre] = useState('')
const [correo , useCorreo] = useState('')
const [telefono , useTelefono] = useState('')
const [codigo , useCodigo] = useState('')
const [city , useCity] = useState('')
const [direcion , useDirecion] = useState('')
const [contraseña , useContraseña] = useState('')

const handleSubmitFormularioRegistro = (e) => {
e.preventDefault()
if ([nombre, correo, telefono, codigo, city, direcion, contraseña].includes('')) {
useExitoRegistro(false)
useErrorRegistro(true)

setTimeout(() => {
useErrorRegistro('')
}, 3000)
return
}
useErrorRegistro(false)
useExitoRegistro(true)
setInterval(() => {
useExitoRegistro('')
},4000)

const valdadionFormulario = {
nombre,
correo,
telefono,
codigo,
city,
direcion,
contraseña
}
useFormularioRegisto([...formularioRegisto , valdadionFormulario])

useCodigo('')
useNombre('')
useCorreo('')
useTelefono('')
useCity('')
useDirecion('')
useContraseña('')
setInterval(() => {
useExitoRegistro('')
}, 4000)
setInterval(() => {
useformularioRegistro(false)
}, 4000)
}


const handleRegistro = () => {
if(handleRegistro){
useformularioRegistro(true)
}
}

const handleCancelar = () => {
useformularioRegistro(false)
}


return(
<div className="caja_texto">
{formularioRegisto.length ? (
<>
<h1>You already have an account created</h1>
<p>Please input your email and password and login into your account</p>
<div className='caja_texto_parrafo'>
<p>You are already part of our{' '}<span>team</span>{' '}✨{' '}✨{' '}✨</p>
</div>
</>
) : (
<>
<h1>Welcome to Bull and Bear Pay</h1>
<p>Please input your email and password and login into your account</p>
<div className='caja_texto_parrafo'>
<p >¿Haven't an account?{' '}<span onClick={handleRegistro}>Signup here</span></p>
</div>
</>
)}
{formularioRegistro &&
<div className='cont_for'>
<form onSubmit={handleSubmitFormularioRegistro} className="formulario_registro" action="">
<h2 className='texto'>Registration</h2>
<div className='formulario_registro_nombre'>
<label className='formulario_registro_label' htmlFor='nombre'>First Name{' '}*</label>
<input className='formulario_registro_input' 
type="text" 
id="nombre"
value={nombre}
onChange={(e) => {useNombre(e.target.value)}} 
placeholder='First Name'/>
</div>

<div className='formulario_registro_correo'>
<label className='formulario_registro_label' htmlFor='correo'>E-Mail Address{' '}*</label>
<input className='formulario_registro_input' 
type='email' 
id="correo"
value={correo}
onChange={(e) => {useCorreo(e.target.value)}} 
placeholder='E-Mail Address' />
</div>

<div className='formulario_registro_telefono'>
<label className='formulario_registro_label' htmlFor='telefono'>Phone{' '}*</label>
<input className='formulario_registro_input' 
type='tel' 
id="telefono"
value={telefono}
onChange={(e) => {useTelefono(e.target.value)}}
placeholder='Your Phone Number' />
</div>

<div className='formulario_registro_city'>
<label className='formulario_registro_label' htmlFor='city'>City{' '}*</label>
<input className='formulario_registro_input' 
type="text" 
id="city" 
value={city}
onChange={(e) => {useCity(e.target.value)}}
placeholder='Enter City' />
</div>

<div className='formulario_registro_codigo_postal'>
<label className='formulario_registro_label' htmlFor='codigo_postal'>Zip code{' '}*</label>
<input className='formulario_registro_input' 
type="text" 
id="codigo_postal"
value={codigo}
onChange={(e) => {useCodigo(e.target.value)}} 
placeholder='Enter zip' />
</div>

<div className='formulario_registro_direcion'>
<label className='formulario_registro_label' htmlFor='direcion'>Address{' '}*</label>
<input className='formulario_registro_input' 
type="text" 
id="direcion"
value={direcion}
onChange={(e) => {useDirecion(e.target.value)}}
placeholder='Enter Address' />
</div>

<div className='formulario_registro_contraseña'>
<label className='formulario_registro_label' htmlFor='contraseña'>Password{' '}*</label>
<input className='formulario_registro_input' 
type='password'
value={contraseña}
onChange={(e) => {useContraseña(e.target.value)}}
id="contraseña" 
placeholder='Enter Password' />
</div>

<div className='formulario_registro_terminos'>
<label className='formulario_registro_label_terminos' htmlFor='terminos'>
<input checked id="terminos" type="checkbox" />{' '}Agree with Terms of Services , <span>Privacy Policy.</span> 
</label>
</div>
<div className='formulario_registro_boton'>
<button className="boton_registro" type='submit'>
<span>Sign up</span>
</button>
</div>
<div onClick={handleCancelar} className='caja_cerar cerar_media'>
<img src={cerar} alt="" />
</div>
</form>
{errorRegistro &&
<ErrorRegistro errorRe="Error: Complete the fields correctly"/>
}
{exitoRegistro &&
<ExitoRegistro exitoRe="Form submitted successfully👍"/>
}
</div>
}
</div>
)
}
export default Texto