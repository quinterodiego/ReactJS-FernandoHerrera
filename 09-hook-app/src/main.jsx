import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HookApp } from './HookApp'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <MultipleCustomHooks />
  // </StrictMode>,
)
