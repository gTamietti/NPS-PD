import React from 'react'

const UserForm = ({data, updateFiledHandler}) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="text"
          id="name"
          placeholder="Digite o seu nome:"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu email:"
          required
        />
      </div>
    </div>
  );
}

export default UserForm