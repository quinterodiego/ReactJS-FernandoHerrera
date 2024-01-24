import { Message } from "./Message"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

  const { username, email, password, onInputChange, onResetForm } = useForm({
    username: '', email: '', password: ''
  })
  

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input 
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input 
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      {
        username === 'Diego' && <Message />
      }

      <button className="btn btn-primary" onClick={onResetForm}>Limpiar</button>
    </>
  )
}
