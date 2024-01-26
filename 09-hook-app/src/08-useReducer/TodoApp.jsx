import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"

export const TodoApp = () => {

  const {todos, handleNewTodo, handleRemoveTodo, handleToggleTodo, todosCount, pending} = useTodos()

  return (
    <>
      <h1>TodoApp: ({todosCount}) - <small>Pendientes: ({pending})</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo}/>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd - onNewTodo(todo)*/}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
      
    </>
  )
}
