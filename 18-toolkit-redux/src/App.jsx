import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice';

function App() {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>IncrementBy</button>
      {counter}
    </>
  )
}

export default App
