import { useState } from 'react';
import { getGifs } from './../helpers/getGifs';  

export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState([]);
    getGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            <p>Hola mundo</p>
        </>
    )
}
