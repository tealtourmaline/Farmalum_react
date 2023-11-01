import { UserRow } from "./UserRow"

export const UsersList = ({ handlerUserSelectedForm, handlerRemoveUser, users}) => {
    return(
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( ({id, username, email, password}) =>(
                        <UserRow 
                            key={id} 
                            id={id}  
                            username={username} 
                            email={email}
                            password={password}
                            handlerUserSelectedForm = {handlerUserSelectedForm}
                            handlerRemoveUser={handlerRemoveUser}/>
                    ))
                }
            </tbody>

        </table>
    )
}