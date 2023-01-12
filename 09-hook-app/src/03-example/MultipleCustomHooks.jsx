import {useFetch} from './../hooks/useFetch';

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';


export const MultipleCustomHooks = () => {

    const {data, isLoading, hasError} = useFetch(url);

    console.log({data, isLoading, hasError})
    
    return (
        <>
            <h1>PokeApi</h1>
            <hr />

        </>
    )
}
