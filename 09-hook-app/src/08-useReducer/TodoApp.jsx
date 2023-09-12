import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del tiempo',
  //   done: false
  // },
  // {
  //   id: new Date().getTime() * 3,
  //   description: 'Recolectar la piedra del alma',
  //   done: false
  // }
]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || [])
  }, [todos])
  

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispatch(action)
  }

  const handleRemoveTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  return (
    <>
      <h1>TodoApp: 10 / <small>Pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <TodoList todos={todos} onRemoveTodo={handleRemoveTodo}/>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

      
    </>
  )
}
