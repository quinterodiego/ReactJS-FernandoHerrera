export const TodoItem = ({todo}) => {
  
  const {id, description} = todo

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{description}</span>
      <button className="btn btn-danger m-0">Borrar</button>
    </li>
  )
}
