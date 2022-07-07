import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
// import { App } from './HelloWorldApp'
import {FirstApp} from './FirstApp'
import './styles.css'


const subTitle = 'Soy un subtítulo';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        <FirstApp title="Hola, soy Diego" subTitle={123} />
    </React.StrictMode>
)