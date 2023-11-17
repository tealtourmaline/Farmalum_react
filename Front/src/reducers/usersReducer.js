export const usersReducer = (state = [], action) => {
    switch(action.type){
        case 'addUser':
            return[
                ...state,
                {
                    ...action.payload,

                }

            ];
        case 'removeUser':
            return state.filter(user => user.id != action.payload);
        case 'updateUser':
            return state.map( u => {
                if(u.id === action.payload.id){
                    return {
                        ...action.payload
                    };
                }
                return u;
            })
        case 'loadingUsers':
            return action.payload;
        case 'loginUser':
            return[
                    ...state,
                    {
                        ...action.payload,
    
                    }
    
                ];
      case 'loginUser':
      return {
        ...state,
        loggedInUser: action.payload,
      };
        default:
            return state;
        
    }
}