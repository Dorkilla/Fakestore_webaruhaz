import React, { useContext } from 'react'
import { KosarContext } from '../contexts/KosarContext'

function Termek(props) {
    const {kosarba} = useContext(KosarContext)
    function katt(){
        kosarba(props.termek)
    }
  return (
    <div className="kartya">
    <div className="card">
    <div className="card-body">
    <img className="card-img" src={props.termek.image} alt={props.termek.title}/>
    <h4 className="card-title">{props.termek.description}</h4>
    <p className="card-text">{props.termek.category}</p>
    <p className="card-text">{props.termek.price}</p>
    <button onClick={katt}>Kosárba</button>
    </div>
    </div>
    </div>
    
  )
}

export default Termek
