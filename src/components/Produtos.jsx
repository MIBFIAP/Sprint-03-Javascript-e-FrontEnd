import { useState } from 'react'


function Produtos() {

const [lista, setLista]= useState([]);

const addLista=()=> setLista([...lista, Math.random(10).toFixed(2)]);
  return (
    <>
    <fieldset> 
    <legend>Lista</legend>
    <ul>


      {lista.map((n,i)=> <li key={i}> {n} </li>)}
    </ul>
    <button onClick={addLista}>add</button>
    </fieldset>
    </>
  )
}

export default Produtos
