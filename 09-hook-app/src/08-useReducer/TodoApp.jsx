import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"


export const TodoApp = () => {

  const { todos, handleNewTodo, handleRemoveTodo, hanldeToggleTodo, pendingTodosCount } = useTodos()

  return (
    <>
      <h1>TodoApp: {todos.length} / <small>Pendientes: {pendingTodosCount()}</small></h1>
      <hr />

      <div className="row">
        <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} onToggleTodo={hanldeToggleTodo}/>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

      
    </>
  )
}
