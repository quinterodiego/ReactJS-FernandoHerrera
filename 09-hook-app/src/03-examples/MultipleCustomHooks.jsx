import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { categories } from './categories'

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
          <div className="alert alert-info text-center">
            Loading...
          </div>
        ) : (      
          <blockquote className="blockquote text-end">
            <p className="mb-5">{ quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
          </blockquote>
        )
      }
      
      <button className="btn btn-primary" onClick={increment} disabled={isLoading}>
        Next Quote
      </button>
    </>
  )
}
