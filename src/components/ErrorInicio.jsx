import error from '../../src/assets/img/error.png'
import '../style/Exito_Error.css'
const ErroInicio = ({errorIn}) => {
return(
     <div className='cont_error'>
          <div className='caja_error'>
               <img src={error} alt="" />
               <p>{errorIn}</p>
          </div>
     </div>
)
}
export default ErroInicio