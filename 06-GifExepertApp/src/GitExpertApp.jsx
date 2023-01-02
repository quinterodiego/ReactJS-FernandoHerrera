import { useState } from "react"
import { AddCategory, GifGrid } from './components';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState([ 'Monitores' ]);

    const onAddCategory = (category) => {
        if ( categories.includes(category) ) return;
        setCategories([ category,...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            {categories.map( category => ( <GifGrid key={category} category={ category } /> ))}
        </>
    )
}
