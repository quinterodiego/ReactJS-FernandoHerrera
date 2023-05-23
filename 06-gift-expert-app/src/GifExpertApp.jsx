import { useState } from "react"
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['cities'])

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory setCategories={setCategories} categories={categories} />

            <ol>
                { 
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    }) 
                }
            </ol>
        </>
    )
}
