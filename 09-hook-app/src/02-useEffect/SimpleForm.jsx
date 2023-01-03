import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormstate] = useState({
        username: 'diegoQuintero',
        email: 'diego@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormstate({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('useEffect called!')
    })

    return (
        <>
            <h1>Formulario Simple</h1>

            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <br />

            <input 
                type="email" 
                className="form-control"
                placeholder="usuario@micorreo.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </>
    )
}
