export const GifGrid = ({ category }) => {

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=GI0p3SZ9v7Fv7Z5PFF62iCy5tXxt3AhI&q=${category}&limit=20`;
        const resp = await fetch( url );
        const { data } = await resp.json();
        
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        console.table(gifs);
    }

    getGifs();

    return (
        <>
            <h3>{ category }</h3>
            <p>Hola Mundo</p>
        </>
    )
}
