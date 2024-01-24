import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

  const {description, onInputChange, } = useForm({
    description: ''
  })

  return (
    <form>
      <input type="text" placeholder="¿Qué hay que hacer?" className="form-control" value={description} onChange={onInputChange}/>
      <button type="submit" className="btn btn-outline-primary mt-2" onClick={() => onNewTodo(description)}>Agregar</button>
    </form>
  )
}
