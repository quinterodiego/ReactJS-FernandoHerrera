import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
// import { App } from './HelloWorldApp'
// import {FirstApp} from './FirstApp'
import { CounterApp } from './CounterApp';
import './styles.css'


const subTitle = 'Soy un subtítulo';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <FirstApp subTitle={123} /> */}
        <CounterApp value={0} />
    </React.StrictMode>
)