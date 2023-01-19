import {useFetch, useCounter} from './../hooks/index';
import {LoadingQuote} from './LoadingQuote';
import {Quote} from './Quote';

export const MultipleCustomHooks = () => {
    
    const {increment, counter} = useCounter(1);
    const url = `https://dummyjson.com/quotes/${counter}`;
    const {data, isLoading, hasError} = useFetch(url);

    const {quote, author} = !!data && data;
    return (
        <>
            <h1>QuoteApi</h1>
            <hr />

            {
                isLoading
                    ? (
                        <LoadingQuote />
                    )
                    : (
                        <Quote quote={quote} author={author}/>
                    )
            }

            <button className='btn btn-primary' onClick={increment}>
                Next quote
            </button>

        </>
    )
}
