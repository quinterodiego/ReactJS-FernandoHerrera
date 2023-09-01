import { useLayoutEffect, useRef, useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"

export const Layout = () => {
  
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
  const { counter, increment } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://dummyjson.com/quotes/${counter}`)
  const { quote, author } = !!data && data

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect()
    setBoxSize({ width, height })
  }, [])
  
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
          <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
            <p className="mb-5" ref={pRef} >{ quote }</p>
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
