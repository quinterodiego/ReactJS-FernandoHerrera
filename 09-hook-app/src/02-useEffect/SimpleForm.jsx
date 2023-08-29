import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState,   setFormState]  = useState({
    username: 'DiegoQuintero',
    email: 'd86webs@gmail.com'
  })

  const { username, email } = formState

  const onInputChange = ({target}) => {
    const {name, value} = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    console.log('useEffect called!')
  }, [])

  useEffect(() => {
    console.log('formState changed!')
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

      {
        username === 'DiegoQuintero' && <Message />
      }

      <input
        type="email"
        className="form-control mt-2"
        placeholder="mail@dominio.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

    </>
  );
};
