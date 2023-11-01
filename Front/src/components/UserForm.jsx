import { useState } from "react"

const initialUserForm = {
    username: '',
    password: '',
    email: '',

}
export const UserForm = () => {

    const [userForm, setUserForm] = useState(initialUserForm);
    const { username, password, email } = userForm;
    const onInputChange = ({ target}) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
            
        })
    }
    return(
        <form>
            <input
                className="form-control my-3 w-75"
                placeholder="Correo"
                name="email"
                value={ email}
                onChange={ onInputChange } />
            <input
                className="form-control my-3 w-75"
                placeholder="Usuario"
                name="username"
                value={ username}
                onChange={ onInputChange } />
            <input
                className="form-control my-3 w-75"
                placeholder="Contraseña"
                type="password"
                name="password"
                value={ password}
                onChange={ onInputChange } />
            <button
                className="btn btn-primary" type="submit"> 
                Crear
            </button>
        </form>
    )
}