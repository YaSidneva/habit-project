import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TelegramAuth() {
    const navigate = useNavigate()

    useEffect(() => {
        // Данные теперь обрабатываются в App.jsx, но на случай, если мы попали сюда напрямую
        const hashParams = new URLSearchParams(window.location.hash.replace('#', ''))
        const tgData = hashParams.get('tgAuthResult')

        if (tgData) {
            try {
                const decodedData = atob(tgData) 
                const userData = JSON.parse(decodedData)
                if (userData && (userData.id || userData.hash)) {
                    localStorage.setItem('user', JSON.stringify({ ...userData, type: 'telegram' }))
                    navigate('/dashboard', { replace: true })
                }
            } catch (e) {
                console.error("Ошибка Telegram Auth:", e)
            }
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
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center',
            padding: '20px'
        }}>
            <div style={{ fontSize: '20px' }}>Авторизация завершена</div>
            <p>Если вы не были перенаправлены автоматически, нажмите кнопку ниже:</p>
            <button 
                onClick={() => navigate('/dashboard')}
                style={{
                    padding: '12px 24px',
                    backgroundColor: '#3C5F7D',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Перейти в Dashboard
            </button>
        </div>
    )
}