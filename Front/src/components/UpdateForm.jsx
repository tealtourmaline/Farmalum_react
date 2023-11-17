import React, { useEffect, useState } from "react";

export const UpdateForm = ({ userSelected, handlerUpdateUser, initialUserForm }) => {
  const [userForm, setUserForm] = useState(initialUserForm);
  const { id, username, email, password } = userForm;

  useEffect(() => {
    setUserForm({ ...userSelected });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !email) {
      alert("Debe completar los campos del formulario");
      return;
    }

    // Actualizar el usuario en la lista de usuarios
    handlerUpdateUser(userForm);
    setUserForm(initialUserForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Correo"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Usuario"
        name="username"
        value={username}
        onChange={onInputChange}
      />
           <input type = "hidden"
             
                name="password"
                value={ password}/>
       <input type="hidden"
                name="id"
                value={id} />
      <button className="btn btn-primary" type="submit">
        Editar
      </button>
    </form>
  );
};
