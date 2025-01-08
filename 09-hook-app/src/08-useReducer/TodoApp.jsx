import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false
  // }
];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action);
  }

  const handleRemoveTodo = (id) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: id
    }

    dispatch(action)
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  return (
    <>
      <h1>TodoApp: 10 <small> - Pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} onToggleTodo={onToggleTodo} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          {/* TodoAdd onNewTodo(todo) */}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
