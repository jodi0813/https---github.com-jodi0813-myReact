import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './0429/App-042901.jsx'
import { BrowserRouter } from 'react-router-dom'

// import './index.css'
// import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
