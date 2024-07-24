import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import PlayercontextProvider from './context/Playercontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayercontextProvider>
    <App />
    </PlayercontextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
