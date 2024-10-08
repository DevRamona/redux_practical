import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import  userReducer from "./Features/user.jsx"
import themeReducer from "./Features/theme.jsx"
const store = configureStore({
  reducer : {
    user : userReducer,
    theme : themeReducer
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </StrictMode>,
)
