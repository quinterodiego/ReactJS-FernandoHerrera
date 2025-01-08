import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onSubmit = (e) => {
    e.preventDefault();

    onNewTodo({
      id: new Date().getTime() * 3,
      description: description,
      done: false
    });

    onResetForm();
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-2"
      >Agregar</button>
    </form>
  )
}
