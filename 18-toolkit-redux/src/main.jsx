import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { PokemonApp } from './PokemonApp'
// import App from './App.jsx'

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </StrictMode>,
)
