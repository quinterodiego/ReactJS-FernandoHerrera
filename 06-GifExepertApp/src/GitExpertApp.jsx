import { useState } from "react"
import { AddCategory } from './components/AddCategory';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState([ 'Supercampeones' ]);

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

            <ol>
                {categories.map( category => {
                    return <li key={ category }>{ category }</li>;
                })}
            </ol>
        </>
    )
}
