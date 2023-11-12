import React, { useState } from "react";

export const LogInForm = ({ handleLogin, initialLoginForm }) => {
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { usernameOrEmail, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!usernameOrEmail || !password) {
      alert("Debe completar los campos del formulario");
      return;
    }

    // Envía los datos al backend para la validación
    handleLogin(loginForm);
    setLoginForm(initialLoginForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Usuario o correo eléctronico"
        name="usernameOrEmail"
        value={usernameOrEmail}
        onChange={onInputChange}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Contraseña"
        type="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary" type="submit">
        Iniciar sesión
      </button>
    </form>
  );
};