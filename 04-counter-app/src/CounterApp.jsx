import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value)

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSubstract = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(0)
  }

  return (
    <>
        <h1>CounterApp</h1>
        <hr />

        <h2>{counter}</h2>

        <button onClick={handleSubstract}>-1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>+1</button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number
}