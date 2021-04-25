import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Formulario({setDivisa, setcripto}) {
    const [error, setError] = useState(false)
    const [listacriptomonedas, setListacriptomonedas] = useState([])
    const [input, setInput] = useState({
        cripto: "",
        divisa: ""
    })
    
const monedas =[
    {codigo: "ARS", nombre: "Peso Argentino"},
    {codigo: "USD", nombre: "Dolar Estadounidense"},
    {codigo: "EUR", nombre: "Euro"},
    {codigo: "GBP", nombre: "Libra Esterlina"}
]
const handleChange = function(e){
  
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
useEffect(
    ()=>{
        const consultarAPI = async ()=>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const result = await axios.get(url);
            setListacriptomonedas(result.data.Data)
        }
        consultarAPI()
    }, []);

    const cotizar = e=>{
        e.preventDefault()
        if(input.cripto === "" || input.divisa=== ""){
            setError(true);
            return;
        }
        setError(false)
        setcripto(input.cripto)
        setDivisa(input.divisa)
    }
    return (
        <form className="formulario" onSubmit={cotizar}>
            <label>Criptomoneda</label>
            <select onChange={handleChange} value={input.cripto} name="cripto">
                <option key="" value="">seleccione</option>
            {listacriptomonedas.map(cripto => (
                <option key={cripto.CoinInfo.id}  value={cripto.CoinInfo.Name}>{cripto.CoinInfo.FullName}</option>
            ) )}
            </select>

            <label>Divisa</label>
            <select onChange={handleChange} value={input.divisa} name="divisa" >
            <option key={0} value="">seleccione</option>
            {monedas.map(moneda=>{
                return(
                    <option key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</option>
                )
            })}
            </select>
            <button className="boton-submit">Calcular</button>
            {error && <p className="error">alguno de los campos no es/son valido/s</p> }
        </form>
    )
}


