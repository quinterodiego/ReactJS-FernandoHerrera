import React from 'react'
import ReactDOM from 'react-dom/client'

// import { App } from './App'
// import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={20}/>
  </React.StrictMode>
)