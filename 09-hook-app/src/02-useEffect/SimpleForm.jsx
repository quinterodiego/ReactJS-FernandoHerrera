import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'd86webs',
    email: 'd86webs@gmail.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }
  

  return (
    <>
      <h1>Formulario Simple</h1>
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
        placeholder="diego@google.com.ar"
        name="email"
        value={email}
        onChange={onInputChange}       
      />

      {
        username === 'd86webs' && <Message />
      }
    </>
  )
}
