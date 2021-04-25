import React from 'react'
 

export default function Cotizacion({resultado}) {
    
    if(Object.keys(resultado).length === 0)return null;

    
    return (
        <div className="cotizacion" >
            
            <p id="precio">Precio : <span id="precio">{resultado.PRICE}</span></p>
            <p>%(diario) : {
        resultado.CHANGEPCTDAY[0]=== "-" ? (<span className="baja">{resultado.CHANGEPCTDAY}</span>) : <span className="suba">{resultado.CHANGEPCTDAY}</span>
                
                } </p>
            <p>Precio mas bajo(ultimas 24 hs): <span>{resultado.LOWDAY}</span></p>
            <p>Precio mas alto(ultimas 24 hs): <span>{resultado.HIGHDAY}</span></p>
        </div>
    )
}
