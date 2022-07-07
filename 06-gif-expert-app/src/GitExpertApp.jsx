import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['uno', 'dos']);

    const onAddCategory = (category) => {
        setCategories([...categories, category])
    }
    
    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory setCategories={setCategories} />

            <ol>
                { categories.map((category, index) => <li key={index}>{category}</li>) }
            </ol>
        </>
    )
}
