import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AuthForm from './components/AuthForm'
import TelegramAuth from './pages/TelegramAuth'
import Dashboard from './pages/Dashboard.jsx'

function App() {
    return (<>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/auth/telegram" element={<TelegramAuth />} />
            <Route path="/dashboard" element={<Dashboard />} />
           </Routes></>
    )
}

export default App