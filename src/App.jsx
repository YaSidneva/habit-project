import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import AuthForm from './components/AuthForm'
import TelegramAuth from './pages/TelegramAuth'
import Dashboard from './pages/Dashboard.jsx'
import Habits from "./pages/Habits.jsx";

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        // 1. Слушаем явное сообщение от попапа
        const handleMessage = (event) => {
            if (event.origin !== window.location.origin) return;
            if (event.data?.type === 'TG_AUTH_SUCCESS') {
                navigate('/dashboard');
            }
        };

        // 2. Слушаем изменения в localStorage
        const handleStorageChange = (e) => {
            if (e.key === 'user' && e.newValue) {
                navigate('/dashboard')
            }
        }

        // 3. Проверяем при фокусе (если попап закрылся, а события выше не сработали)
        const handleFocus = () => {
            const isAuthPage = window.location.pathname === '/' || window.location.pathname === '/login';
            if (localStorage.getItem('user') && isAuthPage) {
                navigate('/dashboard');
            }
        };

        window.addEventListener('message', handleMessage);
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('focus', handleFocus);

        // 4. Проверяем хэш
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

        return () => {
            window.removeEventListener('message', handleMessage);
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('focus', handleFocus);
        }
    }, [navigate])

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/auth/telegram" element={<TelegramAuth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/habits" element={<Habits />} />
        </Routes>
    )
}

export default App