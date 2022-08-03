import { useState } from 'react';
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {
    
    const [categories, setCategories] = useState([]);

    const onAddCategory = (category) => {
        if(categories.includes(category)) return;
        setCategories([...categories, category]);
    }
    
    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory onAddCategory={onAddCategory} />

            {categories.map( category => (
                <GifGrid key={category} category={category} />
            ))}
            
        </>
    )
}
