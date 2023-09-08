import { useForm } from "../hooks/useForm"

export const TodoAdd = () => {

  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  })

  const onFormSubmit = (e) => {
    e.preventDefault()
    if(decription.length <= 1) return
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }
  }

  return (
    <form>
      <input 
        type="text"
        placeholder="Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-3">
        Agregar
      </button>
    </form>
  )
}
