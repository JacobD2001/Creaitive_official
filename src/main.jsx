import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './styles.css'
import GlobalStyles from "./components/globalstyles";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
