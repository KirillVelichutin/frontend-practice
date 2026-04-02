import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Providers from './app/providers'
import AppRouter from './app/router'
import './styles/globals.css'

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <AppRouter />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
)