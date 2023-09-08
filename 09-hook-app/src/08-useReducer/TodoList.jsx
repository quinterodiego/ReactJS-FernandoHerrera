import { TodoItem } from "./TodoItem"

export const TodoList = ({todos = []}) => {
  console.log(todos)
  return (
    <div className="col-7">
      <ul className="list-group">
        {
          todos.map(todo => (
            <TodoItem todo={todo} key={todo.id}/>
          ))
        }
      </ul>
    </div>
  )
}
