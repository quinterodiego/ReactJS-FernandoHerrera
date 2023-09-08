import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './App'
import './styles.css'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App titulo={123} /> */}
        <CounterApp value={123} />
    </React.StrictMode>
)