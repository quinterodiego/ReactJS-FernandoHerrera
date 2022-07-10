import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

export const GitExpertApp = () => {
    
    const [ categories, setCategories ] = useState([]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory )) return;
        setCategories([ ...categories, newCategory ])
    }
    
    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory 
                onNewCategory={ e => onAddCategory(e) }
            />

            { 
                categories.map(( category ) => 
                    (
                        <GifGrid key={ category } category={ category } />
                    )      
                )
            }
        </>
    )
}
