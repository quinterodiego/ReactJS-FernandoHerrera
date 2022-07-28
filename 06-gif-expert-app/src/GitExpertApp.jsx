import { useState } from 'react';

export const GitExpertApp = () => {
    
    const [categories, setCategories] = useState(['Planillas', 'Escritorio']);
    
    return (
        <>
            <h1>GitExpertApp</h1>

            <ol>
                {categories.map( category => {
                    return <li key={ category }>{ category }</li>
                })}
            </ol>
        </>
    )
}
