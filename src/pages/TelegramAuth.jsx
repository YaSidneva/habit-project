import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TelegramAuth() {
    const navigate = useNavigate()

    useEffect(() => {
        // 1. Пытаемся достать данные из Hash (#tgAuthResult=...)
        const hashParams = new URLSearchParams(window.location.hash.replace('#', ''))
        const tgData = hashParams.get('tgAuthResult')

        let userData = null

        if (tgData) {
            try {
                const decodedData = atob(tgData) 
                userData = JSON.parse(decodedData)
            } catch (e) {
                console.error("Ошибка декодирования данных Telegram", e)
            }
        } else {
            const searchParams = new URLSearchParams(window.location.search)
            if (searchParams.get('hash')) {
                userData = Object.fromEntries(searchParams.entries())
            }
        }

        if (userData && (userData.id || userData.hash)) {
            const finalUser = { ...userData, type: 'telegram' }
            localStorage.setItem('user', JSON.stringify(finalUser))
            
            // Если это всплывающее окно (открыто через window.open)
            if (window.opener) {
                // Сообщаем главному окну, что вход выполнен
                window.opener.location.href = '/dashboard';
                window.close();
            } else {
                // Если это обычная вкладка
                navigate('/dashboard', { replace: true })
            }
        } else if (!window.location.hash && !window.location.search) {
             navigate('/login')
        }
    }, [navigate])

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            gap: '20px',
            fontFamily: 'Inter, sans-serif'
        }}>
            <div style={{ fontSize: '20px' }}>Авторизация прошла успешно!</div>
            <button 
                onClick={() => navigate('/dashboard')}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#3C5F7D',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                }}
            >
                Перейти в Dashboard
            </button>
        </div>
    )
}