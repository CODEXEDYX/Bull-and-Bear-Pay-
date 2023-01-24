import errorRegistroIcono from '../../src/assets/img/error.png'
import '../style/Exito_Error.css'
const ErrorRegistro = ({errorRe}) => {
return(
     <div className='cont_error left'>
     <div className='caja_error'>
     <img src={errorRegistroIcono} alt="" />
     <p>{errorRe}</p>
     </div>
     </div>
)   
}

export default ErrorRegistro