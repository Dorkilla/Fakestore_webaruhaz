import React, { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";

function Urlap() {
    const{postAdat, kategoriaLista}=useContext(ApiContext)
    //saját belső state
    const[adat, setAdat]=useState({ //adat az egy objektum

        title:'...',
        price:'1000',
        category:'...',
        description:'...',
        image:'...'
    })

    function adatKuld(event){
        event.preventDefault() //ezzel szedjük le a beépített eseménykezelőt
        //összegyűjtjük az űrlap input mezőiből az adatokat, majd összeállítunk egy objektumot és post kéréssel elküldjük a megfelelő végpontra
        console.log(+"küldés",adat)
        //validálás után küldjük el - formai ellenőrzés
        postAdat("/products", adat)
    }

    function valtozasKezeles(event){
        //itt frissítem a state értékét
        const sv={...adat} //segédváltozóval készítek egy másolatot
        sv[event.target.id]=event.target.value
        setAdat({...sv})
    }
  return (
    <div>
      <form onSubmit={adatKuld}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Termék neve</label>
          <input type="text" pattern="^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű ]{2,}$" value={adat.title} onChange={valtozasKezeles} className="form-control" id="title"/>
        </div>

        <select className="form-select" aria-label="Default select example" onChange={valtozasKezeles}>
        <option selected>Termék kategóriája</option>
        {kategoriaLista.map((adat, index)=>{
        return (<option value={adat} key={index}>{adat}</option>)
        })
        }
        </select>

        <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" value={adat.description} onChange={valtozasKezeles} id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">Comments</label>
        </div>
         
        
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Termék ára</label>
          <input type="number" min="1000" max="100000" value={adat.price} onChange={valtozasKezeles} className="form-control" id="price"/>
          
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>

    
  );
}
export default Urlap;

/*Feladat

*/
