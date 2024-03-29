import { useFetch, useCounter } from "../hooks"
import { LoadingQuote,Quote } from "./../03-examples"

export const Layout = () => {

  const { increment, counter } = useCounter()
  const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

  const { quote, author } = !!data && data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        isLoading ? (
          <LoadingQuote />
        ) : (
          <Quote quote={quote} author={author} />
        )
      }    

      <button className="btn btn-primary" disabled={isLoading} onClick={increment}>Siguiente cita</button> 
    </>
  )
}
