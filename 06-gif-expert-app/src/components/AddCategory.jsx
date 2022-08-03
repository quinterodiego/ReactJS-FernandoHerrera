import {useState} from 'react'

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onAddCategory(inputValue.trim());
        setInputValue('')
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
