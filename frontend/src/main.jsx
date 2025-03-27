import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'  // Importa o BrowserRouter

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />  {/* Toda a aplicação precisa estar dentro do BrowserRouter */}
    </BrowserRouter>
  </React.StrictMode>,
)
