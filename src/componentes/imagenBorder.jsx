import superman from '../imagenes/superman.png';
import '../hojas-de-estilo/imagenBorder.css';
export function ImagenBorder(){
    const evento =() =>{
        const supermanimg = document.querySelector('.supermanimg');
        if (supermanimg.style.border === '2px solid red') {
            supermanimg.style.border = '0px';
        } else {
            supermanimg.style.border = '2px solid red';
        }
        console.log(supermanimg);
      }
return(
    <div className='contenedor-imagen'>
        <img className='supermanimg' src={superman}
        alt='superman'
        onClick={evento}/>
    </div>
)
}