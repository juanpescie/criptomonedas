import axios from "axios";
import image from "./criptomonedas-png-3-Transparent-Images.png"
import { useState, useEffect} from "react";
import Formulario from "./components/Formulario"
import Cotizacion from "./components/Cotizacion"


function App() {

  const [divisa, setDivisa] = useState("");
  const [cripto, setcripto] = useState("");
  const [resultado, guardarResultado] = useState({})
  useEffect(()=>{
    const cotizarcripto = async ()=>{
      if(divisa === "" || cripto === "") return;
    
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${divisa}`
    const result = await axios.get(url)
    guardarResultado(result.data.DISPLAY[cripto][divisa])

    }
    cotizarcripto()
  },[divisa, cripto])

  return (
    <div className="App">
      <h1 className="title">COTIZADOR DE CRIPTOMONEDAS</h1>
      <hr/>
      <div className="contenedor-principal">
      <div key={2}>
        <img src={image} alt=""/>
        <h2>Cotizador al instante de criptomonedas</h2>
        <h4>tomando datos de una API de criptomonedas</h4>
        <p>mostraremos al usuario una serie de valores 
          y estadisticas de las criptomonedas</p>
          <p>protagonistas del mercado
          en estos momentos</p>
      </div>
      <div className="contenedor-form">
        <Formulario
        setDivisa = {setDivisa}
        setcripto={setcripto}
        />
        <Cotizacion resultado={resultado}/>
      </div>
      
      </div>
    </div>
  );
}

export default App;
