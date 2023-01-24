import '../style/Formulario.css'
import react from '../../src/assets/img/react.png'
import ErroInicio from './ErrorInicio'
import ExitoInicio from './ExitoInicio'
import {useState} from 'react'
const Formulario = ({ formularios, useFormularios , formularioRegisto }) => {
const [correo , useCorreo] = useState('')
const [contraseña , useContraseña] = useState('')
const [errores , useErrores] = useState(false)
const [exitos , useExitos] = useState(false)
const handleSubmit = (e) => {
e.preventDefault()
if([correo,contraseña].includes('')){
useErrores(true)
useExitos(false)
setTimeout(() => {
useErrores('')
}, 3000)
return
}
useErrores(false)
useExitos(true)
const valores = {
contraseña,
correo
}
useFormularios([...formularios , valores])
useCorreo('')
useContraseña('')
setTimeout(() => {
useExitos('')
}, 3000)
}
return(
<div className='caja_texto'>
<form  onSubmit={handleSubmit} className='formulario' action="">
<div className='caja_img_react'>
<h2>Bull and Bear Pay</h2>
<img className='img_react' src={react} alt="" />
</div>
{formularioRegisto.length ? (
<>
<div className='formulario_grupo'>
<label className='formulario_label_input' htmlFor='correo'>Email{' '}*</label>
<input
className='formulario_input '
autoComplete='on' type='email'
placeholder='Email'
value={correo}
onChange={(e) => { useCorreo(e.target.value) }}
id="correo" />
</div>
<div className='formulario_grupo'>
<label className='formulario_label_input' htmlFor='contraseña'>Password{' '}*</label>
<input
className='formulario_input'
type='password'
value={contraseña}
onChange={(e) => { useContraseña(e.target.value) }}
placeholder='password'
id="contraseña" />
</div>

<div className='formulario_grupo_ajustes'>
<label className='formulario_label_checkbox' htmlFor='recordar'>
<input type="checkbox" id="recordar" />{' '}Remember Me
</label>
<a href="#">Forgot password?</a>
</div>   
</>
) : (
<>
<div className='formulario_grupo'>
<label className='formulario_label_input' htmlFor='correo'>Email{' '}*</label>
<input
className='formulario_input error_inicio_input'
autoComplete='on'
placeholder='Email'
value={correo}
maxLength='0'
onChange={(e) => { useCorreo(e.target.value)}}
id="correo" />
</div>
<div className='formulario_grupo'>
<label className='formulario_label_input error_inicio_label ' htmlFor='contraseña'>Password{' '}*</label>
<input
className='formulario_input error_inicio_input'
value={contraseña}
maxLength='0'
onChange={(e) => { useContraseña(e.target.value)}}
placeholder='password'
id="contraseña" />
</div>
<div className='formulario_grupo_ajustes error_grupo_inicio'>
<label className='formulario_label_checkbox' htmlFor='recordar'>
<input type="checkbox" id="recordar" />{' '}Remember Me
</label>
<a href="#">Forgot password?</a>
</div>
</>
)}
{formularios && formularioRegisto.length ? (
<>
<button type="submit"><span>Sign in</span></button>
</>
) : (
<>
<button className='boton_error_inico' type="button"><span>You don't have an account created</span></button>
</>
)}
<div className='terminos'>
<a href="#">Terms of Services</a>
<a href="#">Privacy Policy</a>
</div>
</form>
{ errores &&
<ErroInicio errorIn="Error: Complete the fields correctly"/> 
}
{ exitos &&
<ExitoInicio exitoIn='Form submitted successfully👍'/>
}
</div>
)
}
export default Formulario