import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { MainProvider } from './context/MainProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <App />
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>
)
