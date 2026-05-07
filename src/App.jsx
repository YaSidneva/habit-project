import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import AuthForm from './components/AuthForm'
import TelegramAuth from './pages/TelegramAuth'
import Dashboard from './pages/Dashboard.jsx'

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        // Слушаем изменения в localStorage (для входа через popup)
        const handleStorageChange = (e) => {
            if (e.key === 'user' && e.newValue) {
                navigate('/dashboard')
            }
        }
        window.addEventListener('storage', handleStorageChange)

        // Проверяем наличие данных Telegram в хэше (для обычного редиректа)
        const hashParams = new URLSearchParams(window.location.hash.replace('#', ''))
        const tgData = hashParams.get('tgAuthResult')

        if (tgData) {
            try {
                const decodedData = atob(tgData)
                const userData = JSON.parse(decodedData)
                
                if (userData && (userData.id || userData.hash)) {
                    localStorage.setItem('user', JSON.stringify({ ...userData, type: 'telegram' }))
                    window.history.replaceState({}, document.title, window.location.pathname)
                    navigate('/dashboard')
                }
            } catch (e) {
                console.error("Ошибка при обработке данных Telegram:", e)
            }
        }

        return () => window.removeEventListener('storage', handleStorageChange)
    }, [navigate])

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/auth/telegram" element={<TelegramAuth />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default App