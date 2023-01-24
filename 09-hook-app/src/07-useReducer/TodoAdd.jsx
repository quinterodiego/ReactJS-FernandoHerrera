import { useForm } from './../hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (e) => {
        e.preventDefault()
        if(description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo && onNewTodo(newTodo)
    }

    return (
        <form action="#" onSubmit={onFormSubmit}>
            <input 
                type="text" 
                name="description" 
                className="form-control" 
                placeholder='Que hay que hacer?'
                onChange={onInputChange}
                value={description}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    )
}
