import '../hojas-de-estilo/sticker-card.css';
export function EstickerCard(props) {
  return (
    <li className='card'>
        <img className='imagen-card' src={props.img} alt={props.img}/>
        <input className='inputnumber' type='number'value={props.valor}
        onChange={props.onChange}/>
    </li>
  )
}
