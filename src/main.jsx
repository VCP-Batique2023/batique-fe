import React from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from '@/contexts/AuthContext'
import App from '@/pages/App.jsx'
import '@/assets/style/index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
