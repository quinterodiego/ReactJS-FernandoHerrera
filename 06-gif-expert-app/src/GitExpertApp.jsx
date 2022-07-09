import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GitExpertApp = () => {
    
    const [ categories, setCategories ] = useState([]);

    const onAddCategory = ( newCategory ) => {
        setCategories([ ...categories, newCategory ])
    }
    
    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ e => onAddCategory(e) }
            />

            <ol>
                { categories.map(( category, index ) => <li key={ index }>{ category }</li>) }
            </ol>
        </>
    )
}
