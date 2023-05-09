import { Select } from "./select";
import { useState } from 'react';
import '../hojas-de-estilo/selects.css';
export function Selects() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [numero3, setNumero3] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [resultado, setResultado] = useState('');
    const paswoord1='911';
    const paswoord2='714';

    const handleNumero1Change = (event) => {
        setNumero1(event.target.value);
      };
    
      const handleNumero2Change = (event) => {
        setNumero2(event.target.value);
      };
    
      const handleNumero3Change = (event) => {
        setNumero3(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const nuevaContraseña = numero1 + numero2 + numero3;
        if (nuevaContraseña === paswoord1){
          setResultado('password 1 correcto');
        } else if(nuevaContraseña === paswoord2){
            setResultado('password 2 correcto'); 
        }else{
            setResultado('password incorrecto'); 
        }
        setContraseña(nuevaContraseña);
      };
 
  return (
    <div className="contenedor-pwsd">
      <h2>INGRESA EL PASSWORD</h2>
      <div className="contenedor-select">
        <Select valor ={numero1}
        onchange={handleNumero1Change}/>
        <Select valor ={numero2}
        onchange={handleNumero2Change}/>
        <Select valor ={numero3}
        onchange={handleNumero3Change}/>
      </div>
        <button className="btnpaswoord" onClick={handleSubmit}>Ingresar</button>
        <p className="resultado-paswoord">{resultado}</p>
    </div>
  );
}
