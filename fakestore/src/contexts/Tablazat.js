import React, { useContext } from 'react'
import { ApiContext } from './ApiContext';

 function Tablazat() {
    const {termekLista}=useContext(ApiContext);
  return (
    <table className="table">
    <thead>
    <tr>
          <th scope="col">#</th>
          <th scope="col">Név</th>
          <th scope="col">Kategória</th>
          <th scope="col">Leírás</th>
          <th scope="col">Ár</th>
          <th scope="col">Kép</th>
        </tr>
    </thead>
    <tbody>
      {termekLista.map((adat, index)=>{
       return <tr>
        <th scope="row"></th>
            <td>{adat.id}</td>
            <td>{adat.title}</td>
            <td>{adat.category}</td>
            <td>{adat.description}</td>
            <td>{adat.price}</td>
            <td>{adat.image}</td>
        </tr>
      })}
    </tbody>
    </table>
  );
}

export default Tablazat;