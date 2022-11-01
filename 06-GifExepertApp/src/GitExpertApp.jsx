import { useState } from "react"
import {AddCategory} from './components/AddCategory';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Supercampeones']);

    const onAddCategory = () => {
        setCategories(['Hola Mundo',...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory />
            <br /><br />
            <button onClick={onAddCategory}>Agregar</button>

            <ol>
                {categories.map( category => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    )
}
