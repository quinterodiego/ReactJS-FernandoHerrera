import { useState, useRef } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const ref = useRef('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return
        onNewCategory( inputValue.trim() )
        ref.current.value = ''
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                onChange={onInputChange}
                ref={ref}
            />
        </form>
    )
}
