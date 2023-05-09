import superman from '../imagenes/superman.png';
import '../hojas-de-estilo/imagenBorder.css';
export function ImagenBorder(){
    const evento =() =>{
        const imgsuperman = document.querySelector('.imagen-superman');
        if (imgsuperman.style.border === '2px solid red') {
            imgsuperman.style.border = '0px';
        } else {
            imgsuperman.style.border = '2px solid red';
        }
        console.log(imgsuperman);
      }
return(
    <div className='contenedor-imagen'>
        <img className='imagen-superman' src={superman}
        alt='superman'
        onClick={evento}/>
    </div>
)
}