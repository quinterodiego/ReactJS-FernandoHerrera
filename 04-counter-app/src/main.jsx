import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="FirstApp" subtitle="123" /> */}
        <CounterApp value={10} />
    </React.StrictMode>
)