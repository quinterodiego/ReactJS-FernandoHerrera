import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  })

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (description.lenght <= 1) return
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }

    console.log(newTodo)
    onNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="¿Qué hay que hacer?" name='description' className="form-control" value={description} onChange={onInputChange}/>
      <button type="submit" className="btn btn-outline-primary mt-2" onClick={() => onNewTodo(description)}>Agregar</button>
    </form>
  )
}
