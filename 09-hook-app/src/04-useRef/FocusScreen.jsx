import { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()

    const onClick = () => {
        console.log(inputRef)
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input ref={inputRef} type="text" name="" id="" placeholder="Ingrese nombre" className="form-control"/>

            <button className="btn btn-primary mt-2" onClick={onClick}>Set focus</button>
        </>
    )
}
