import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavystuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos')

  }
  return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

  const {counter, increment} = useCounter(1000)
  const [show, setShow] = useState(true)

  const memorized = useMemo(() => heavystuff(counter), [counter])
 
  return (
    <>
      <h1>Counter: <small>{counter}</small></h1>
      <hr />

      <h4>{memorized}</h4>
      
      <button className="btn btn-primary" onClick={increment}>+1</button>
      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
