import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"
import { types } from "../types/types"

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const login = async (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name
      }
    }
    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user')
    const action = {
      type: types.logout
    }
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
