import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote } from "./LoadingQuote"
import { Quote } from "./Quote"

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://dummyjson.com/quotes/${counter}`)
  console.log(data)
  const { quote, author } = !!data && data

  return (
    <>
      <h1>Quotes</h1>
      <hr />

      {
        isLoading ? (
          <LoadingQuote />
        ) : (      
          <Quote author={author} quote={quote} />
        )
      }
      
      <button className="btn btn-primary" onClick={increment} disabled={isLoading}>
        Next Quote
      </button>
    </>
  )
}
