import { TodoItem } from "./TodoItem"

export const TodoList = ({todos = [], onRemoveTodo}) => {

  return (
    <div className="col-7">
      <ul className="list-group">
        {
          todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo} />
          ))
        }
      </ul>
    </div>
  )
}
