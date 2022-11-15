import { useState } from "react"
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState([ 'Motherboards' ]);

    const onAddCategory = (category) => {
        if ( categories.includes(category) ) return;
        setCategories([ category,...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />

            {categories.map( category => ( <GifGrid key={category} category={ category } /> ))}
        </>
    )
}
