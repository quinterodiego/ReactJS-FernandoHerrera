import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Diego',
    email: 'd86webs@gmail.com'
  })

  const {username, email} = formState

  const onInputChange = (e) => {
    const {name, value} = e.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    
  }, [formState])
  

  return (
    <>
      <h1>SimpleForm</h1>
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

      {
        username === 'Diego' && <Message />
      }
    </>
  )
}
