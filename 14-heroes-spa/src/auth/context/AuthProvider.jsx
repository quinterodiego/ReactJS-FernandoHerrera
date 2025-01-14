import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";

const initialState = {
  logged: false
};

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = (name = '') => {
    console.log(name)
    const action = {
      type: types.login,
      payload: {
        id: 123,
        name: name
      }
    };

    dispatch(action);
  }
  
  return <AuthContext.Provider value={{ authState, login }}>
    {children}
  </AuthContext.Provider>
}
