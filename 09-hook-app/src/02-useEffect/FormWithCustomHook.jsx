import { useState } from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {
  username: '',
  email: '',
  password: ''
};

export const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm, username, email, password } = useForm(initialForm);

  return (
    <>
      <h1>FormWithCustomHook</h1>
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

      <input 
        type="password"
        className="form-control mt-2"
        name="password"
        placeholder="Contraseña"
        value={password}
        onChange={onInputChange}       
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
