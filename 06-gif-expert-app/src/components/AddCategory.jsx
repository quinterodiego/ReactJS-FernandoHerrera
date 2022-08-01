import {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs" 
                name="" 
                id=""
                value={inputValue} 
                onChange={onInputChange}
            />
        </form>
    )
}
