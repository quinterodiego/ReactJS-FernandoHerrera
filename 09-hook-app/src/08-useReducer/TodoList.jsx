import { TodoItem } from "./TodoItem"

export const TodoList = ({todos = [], onRemoveTodo, onToggleTodo}) => {

  return (
    <div className="col-7">
      <ul className="list-group">
        {
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />
          ))
        }
      </ul>
    </div>
  )
}
