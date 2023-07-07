import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const { username, email, password } = formState

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <br />

            <button className='btn btn-primary' onClick={onResetForm}>Borrar</button>
        </>
    )
}
