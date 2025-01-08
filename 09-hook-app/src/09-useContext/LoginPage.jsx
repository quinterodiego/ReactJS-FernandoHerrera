import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser({ id: 123, name: 'Diego Quintero' }) } >Establecer usuario</button>
    </>
  )
}
