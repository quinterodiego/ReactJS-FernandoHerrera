import { useState, useEffect } from 'react';
import { getGifs } from './../helpers/getGifs';  

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs( category );
    }, [])

    
    return (
        <>
            <h3>{ category }</h3>
            <ul>
                <li></li>
            </ul>
        </>
    )
}
