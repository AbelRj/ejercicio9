import peluche1 from '../imagenes/peluche1.jpg';
import peluche2 from '../imagenes/peluche2.jpg';
import peluche3 from '../imagenes/peluche3.jpg';
import '../hojas-de-estilo/Stickers.css';
import { useState } from 'react';

import { EstickerCard } from "./sticker-card";

export function Stickers(){

    
        const [valor1, setValor1] = useState(0);
        const [valor2, setValor2] = useState(0);
        const [valor3, setValor3] = useState(0);
        const [suma, setSuma] = useState(0);

        const handleValor1Change = (event) => {
            setValor1(parseInt(event.target.value));
        }
    
        const handleValor2Change = (event) => {
            setValor2(parseInt(event.target.value));
        }
        const handleValor3Change = (event) => {
            setValor3(parseInt(event.target.value));
        }

        const SumarPeluches = (e) => {
            e.preventDefault();
            let nuevaSuma = valor1 + valor2 + valor3;
            if (nuevaSuma >10){
                alert("no puede llevar mas de 10 cosas")
                nuevaSuma = 0;
            }
            setSuma(nuevaSuma); 
            
        }

    return(
        <form className='form'>
            <ul className='contenedor-sticker'>
                <EstickerCard img={peluche1}
                valor={valor1}
                onChange={handleValor1Change}
                />
                <EstickerCard img={peluche2}
                valor={valor2}
                onChange={handleValor2Change}
                />
                <EstickerCard img={peluche3}
                valor={valor3}
                onChange={handleValor3Change}
                />
            </ul>
            <button className='btncalcular' onClick={SumarPeluches}>Calcular</button>
            <p className='parrafo-resultado'>{suma}</p>

        </form>
    )
}