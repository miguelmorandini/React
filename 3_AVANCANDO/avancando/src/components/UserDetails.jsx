import React from 'react'

const UserDetails = ({name, age, job}) => {
 
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age<18 && <p>Não pode tirar Carteira de Habilitação</p>}
      {age>=18 && <p>Pode tirar Carteira de Habilitação!</p>}
      
    </div>
  )
}

export default UserDetails