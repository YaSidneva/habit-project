import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TelegramAuth() {
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
            
            // 1. Уведомляем основное окно через postMessage (самый надежный способ)
            if (window.opener) {
                window.opener.postMessage({ type: 'TG_AUTH_SUCCESS' }, window.location.origin);
            }
            
            // 2. Закрываем попап через небольшую паузу
            setTimeout(() => {
                window.close();
            }, 500);
        }
    }, [])

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Авторизация...</h2>
            <p>Это окно закроется автоматически.</p>
        </div>
    )
}