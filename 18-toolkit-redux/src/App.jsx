import { useSelector, useDispatch } from 'react-redux';
import { increment } from './store/slices/counter/counterSlice';

function App() {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      {counter}
    </>
  )
}

export default App
