import {TodoList} from './TodoList'
import {TodoAdd} from './TodoAdd'
import {useTodo} from "../hooks/useTodo"

export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount }  = useTodo()

    return (
        <>
            <h1 className="text-center">TodoApp</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <h4>Todos: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h4>
                    <hr />

                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    )
}
