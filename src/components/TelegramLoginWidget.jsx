import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function TelegramLoginWidget() {
    const containerRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (!containerRef.current) return
        containerRef.current.innerHTML = ""
        
        // Создаем глобальную функцию для обработки входа
        window.onTelegramAuth = (user) => {
            console.log('Telegram Auth Success:', user)
            
            // СИНХРОНИЗАЦИЯ С "БАЗОЙ ДАННЫХ" (используем id или username как уникальный ключ для Telegram)
            const users = JSON.parse(localStorage.getItem('registered_users') || '[]')
            const existingUser = users.find(u => u.telegramId === user.id)

            if (!existingUser) {
                users.push({
                    telegramId: user.id,
                    username: user.username,
                    first_name: user.first_name,
                    type: 'telegram',
                    createdAt: new Date().toISOString()
                })
                localStorage.setItem('registered_users', JSON.stringify(users))
            }

            localStorage.setItem('user', JSON.stringify({ ...user, type: 'telegram' }))
            navigate('/dashboard')
        }

        const script = document.createElement("script")
        script.src = "https://telegram.org/js/telegram-widget.js?22"
        script.async = true
        
        script.setAttribute("data-telegram-login", "my_mindful_test_bot")
        script.setAttribute("data-size", "large")
        script.setAttribute("data-radius", "10")
        script.setAttribute("data-onauth", "onTelegramAuth(user)")
        script.setAttribute("data-request-access", "write")
        
        containerRef.current.appendChild(script)

        return () => {
            // Не удаляем функцию сразу, чтобы она была доступна для колбэка
        }
    }, [navigate])

    return (
        <div 
            ref={containerRef} 
            className="telegram-widget-container"
            style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', minHeight: '40px' }}
        >
        </div>
    )
}
