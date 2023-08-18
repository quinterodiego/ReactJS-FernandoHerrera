import { useGetTodosQuery } from './store/apis'

export const TodoApp = () => {

    const { data: todos = [], isLoading } = useGetTodosQuery()

    return (
        <>
            <h1>TodoApp - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True': 'False' }</h4>
            <pre>...</pre>

            <ul>
                {
                    todos.map(todo => (
                        <li>
                            <strong>{todo.completed ? 'DONE - ' : 'Pending - '}</strong>
                            {todo.title}
                        </li>
                    ))
                }
            </ul>

            <button>
                Next todo
            </button>
        </>
    )
}
