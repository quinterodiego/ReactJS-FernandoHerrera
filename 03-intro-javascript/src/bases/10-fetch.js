const apiKey = 'GI0p3SZ9v7Fv7Z5PFF62iCy5tXxt3AhI';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    })
    .catch(console.warn)