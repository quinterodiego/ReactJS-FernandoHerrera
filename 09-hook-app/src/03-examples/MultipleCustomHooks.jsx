import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

  const { data, isLoading, hasError } = useFetch(`https://api.api-ninjas.com/v1/quotes?category=happiness`)

  return (
    <>
      <h1>Quotes</h1>
      <hr />
    </>
  )
}
