
import { useEffect, useState } from 'react'


function Casal() {
const[dados, setDados]=useState('')
useEffect(()=>{
  fetch('https://api-9b8h.onrender.com/')
  .then(r => r.json())
  .then(res => setDados(res))
},[])
  return (
    <div className='container'>
    {
      dados.length > 0 ? (
        dados.map((item, index)=> (
          <div key={index}>
          <h2>{item.name}</h2>
          <img src={item.img} alt="" />
          <p>{item.diaUm}</p>
          <p>{item.diaDois}</p>
          <p>{item.diaTres}</p>
          </div>
        ))
      ) : (
        <p>Carregando o Roteiro</p>
      )
    }
    </div>
  )
}

export default Casal
