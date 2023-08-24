import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,} from "react-router-dom";
import Context, { useGlobalContext } from "./context/context";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Context>
      <App />
      </Context>
    </Router>
  </React.StrictMode>,
)
