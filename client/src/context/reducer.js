let user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";
let token = localStorage.getItem("token");
let isAuthenticated = localStorage.getItem("isAuthenticated") ? true : false;

export const initialState = {
  user: "" || user,
  token: "" || token,
  isAuthenticated: isAuthenticated,
  loading: false,
  errorMessage: null
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      // TODO: Add userdetails to local storage
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAuthenticated", true);
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...initialState,
        user: "",
        token: ""
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
