import exito from '../../src/assets/img/exito.png'
import '../style/Exito_Error.css'
const ExitoInicio = ({exitoIn}) => {
return(
          <div className='cont_exito'>
               <div className='caja_exito'>
                    <img src={exito} />
                    <p>{exitoIn}</p>
               </div>
          </div>
)
}
export default ExitoInicio