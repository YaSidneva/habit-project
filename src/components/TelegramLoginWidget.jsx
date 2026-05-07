import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function TelegramLoginWidget() {
    const containerRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (!containerRef.current) return

        // Очищаем старую кнопку
        containerRef.current.innerHTML = ""
        
        // Создаем функцию обратного вызова в глобальной области видимости
        window.onTelegramAuth = (user) => {
            console.log('Telegram Auth Success:', user)
            localStorage.setItem('user', JSON.stringify({ ...user, type: 'telegram' }))
            navigate('/dashboard')
        }

        const script = document.createElement("script")
        script.src = "https://telegram.org/js/telegram-widget.js?22"
        script.async = true
        
        // Настройки виджета
        script.setAttribute("data-telegram-login", "my_mindful_test_bot")
        script.setAttribute("data-size", "large")
        script.setAttribute("data-radius", "10")
        script.setAttribute("data-onauth", "onTelegramAuth(user)")
        script.setAttribute("data-request-access", "write")
        
        containerRef.current.appendChild(script)

        return () => {
            // Убираем глобальную функцию при размонтировании
            delete window.onTelegramAuth
        }
    }, [navigate])

    return (
        <div 
            ref={containerRef} 
            className="telegram-widget-container"
            style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', minHeight: '40px' }}
        >
            {/* Сюда Telegram вставит кнопку */}
        </div>
    )
}
