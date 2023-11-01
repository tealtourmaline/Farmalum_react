import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartApp } from './CartApp'
import { UsersApp } from './UsersApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartApp />
    <UsersApp />
  </React.StrictMode>,
)
