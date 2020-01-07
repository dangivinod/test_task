const initialState = {
    login: {
        "username":"hruday@gmail.com",
        "password" :'hruday123'
    }
}

export const LoginReducer = (state = initialState, action) => {
  switch ("LOGIN_TYPE") {
    case "LOGIN_TYPE":
      return state;

    default:
      return []
  }
}
