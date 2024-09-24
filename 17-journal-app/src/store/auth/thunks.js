import { signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
  return async(disptach) => {
    disptach(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials())
    const result = signInWithGoogle()
    if(!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))
  }
}