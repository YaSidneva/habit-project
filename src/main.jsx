import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="197893643819-d5b2kje73351mckft2f4gir6vlsfago5.apps.googleusercontent.com">
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GoogleOAuthProvider>
)