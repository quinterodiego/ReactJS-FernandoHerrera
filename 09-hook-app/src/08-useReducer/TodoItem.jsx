export const TodoItem = ({todo, onRemoveTodo}) => {
  
  const {id, description} = todo

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{description}</span>
      <button className="btn btn-danger m-0" onClick={onRemoveTodo(id)}>Borrar</button>
    </li>
  )
}
