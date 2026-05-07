import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TelegramAuth() {
    const navigate = useNavigate()

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.replace('#', ''))
        const tgData = hashParams.get('tgAuthResult')

        let userData = null

        if (tgData) {
            try {
                const decodedData = atob(tgData) 
                userData = JSON.parse(decodedData)
            } catch (e) {
                console.error("Error decoding TG data", e)
            }
        } else {
            const searchParams = new URLSearchParams(window.location.search)
            if (searchParams.get('hash')) {
                userData = Object.fromEntries(searchParams.entries())
            }
        }

        if (userData) {
            localStorage.setItem('user', JSON.stringify({ ...userData, type: 'telegram' }))
            
            // Если это было окно-попап (есть родитель), уведомляем его
            if (window.opener) {
                try {
                    window.opener.postMessage({ type: 'TG_AUTH_SUCCESS' }, window.location.origin);
                    setTimeout(() => window.close(), 500);
                } catch (e) {
                    navigate('/dashboard');
                }
            } else {
                // Если это основное окно — просто переходим
                navigate('/dashboard');
            }
        } else {
            // Если зашли просто так — на главную
            const timer = setTimeout(() => navigate('/'), 3000);
            return () => clearTimeout(timer);
        }
    }, [navigate])

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            fontFamily: 'Inter, sans-serif' 
        }}>
            <h2>Авторизация завершена. Переходим в Dashboard...</h2>
        </div>
    )
}
