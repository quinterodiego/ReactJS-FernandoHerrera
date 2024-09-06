import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, decrement, incrementByValue } from './store/slices/counter'

function App() {
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is {counter}</h1>
      <div className="card">
        <button style={{ margin: '5px' }} onClick={() => dispatch(increment())}>
          Incrementar
        </button>
        <button style={{ margin: '5px' }} onClick={() => dispatch(decrement())}>
          Decrementar
        </button>
        <button style={{ margin: '5px' }} onClick={() => dispatch(incrementByValue(2))}>
          Incrementar de a 2
        </button>
      </div>
    </>
  )
}

export default App
