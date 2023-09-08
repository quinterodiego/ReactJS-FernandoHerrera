import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del tiempo',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del alma',
    done: false
  }
]

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
      <h1>TodoApp: 10 / <small>Pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <TodoList todos={todos} />
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd />
        </div>
      </div>

      
    </>
  )
}
