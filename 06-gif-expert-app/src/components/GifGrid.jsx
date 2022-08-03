import { useState, useEffect } from 'react';
import { GifItem } from './GifItem'
import { getGifs } from './../helpers/getGifs'
import { useFetchGifs } from './../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);   
    }

    useEffect(() => {
        getImages();
    }, [])


    return (
        <>
            <h3>{ category }</h3>
            {
                images.map(image => <li key={image.id}>{image.id}</li>)
            }
        </>
    )
}
