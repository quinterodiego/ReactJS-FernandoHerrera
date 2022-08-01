import { useState } from 'react';
import {AddCategory} from './components/AddCategory'

export const GitExpertApp = () => {
    
    const [categories, setCategories] = useState(['Planillas', 'Escritorio']);

    const onAddCategory = (category) => {
        setCategories([...categories, category]);
    }
    
    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory />

            <button onClick={() => onAddCategory('Monitores')}>Agregar</button>
            
            <ol>
                {categories.map( category => {
                    return <li key={ category }>{ category }</li>
                })}
            </ol>
        </>
    )
}
