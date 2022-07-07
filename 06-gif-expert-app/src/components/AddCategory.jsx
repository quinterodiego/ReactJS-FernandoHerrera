import { useState } from "react"

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Prueba');

    const onInputChange = ({target}) => {
        console.log(target.value)
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.prevetDefault();
        setCategories([inputValue])
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
