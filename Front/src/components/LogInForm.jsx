import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LogInForm = ({ handleLogin, initialLoginForm }) => {
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { username, password } = loginForm;
  const navigateTo = useNavigate();

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Debe completar los campos del formulario");
      return;
      
    }
    handleLogin({loginForm});
    setLoginForm(initialLoginForm);
  
    
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Usuario "
        name="username"
        value={ username }
        onChange={ onInputChange }
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Contraseña"
        type="password"
        name="password"
        value={ password }
        onChange={ onInputChange }
      />
      <button className="btn btn-primary" type="submit">
        Iniciar sesión
      </button>
    </form>
  )
}
