import exitoRegistroIcono from '../../src/assets/img/exito.png'
import '../style/Exito_Error.css'
const ExitoRegistro = ({exitoRe}) => {
     return(
          <div className='cont_exito left'>
               <div className='caja_exito'>
                    <img src={exitoRegistroIcono} />
                    <p>{exitoRe}</p>
               </div>
          </div>
     )
}
export default ExitoRegistro