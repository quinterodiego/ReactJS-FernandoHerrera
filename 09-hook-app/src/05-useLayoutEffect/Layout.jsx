import { useFetch } from './../hooks/useFetch'
import { useCounter } from './../hooks/useCounter';
import { IsLoadingQuotes } from '../03-examples/IsLoadingQuotes';
import { Quotes } from '../03-examples/Quotes';

export const Layout = () => {

    const { increment, counter } = useCounter(1)
    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const { quote, author} = !!data && data[0]

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading ? (
                    <IsLoadingQuotes />
                ) : (
                    <Quotes quote={quote} author={author} />
                )
            }

            <button className='btn btn-primary' onClick={increment} disabled={isLoading} >Próxima cita</button>
        </>
    )
}
