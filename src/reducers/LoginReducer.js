const initialState = {
    login: {
        "username":"hruday@gmail.com",
        "password" :'hruday123'
    }
}

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_TYPE":
      return state;

    case "REGISTER_TYPE":
      return Object.assign({},state, action.payload)
      
    default:
      return state
  }
}
