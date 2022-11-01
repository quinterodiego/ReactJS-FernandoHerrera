import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('El Chavo')

    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }

    return (
        <form>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
