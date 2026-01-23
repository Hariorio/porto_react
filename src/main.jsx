import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "@mdi/font/css/materialdesignicons.min.css"
import "./assets/css/bootstrap-lite.scss"
import './assets/css/index.css'


import {BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
