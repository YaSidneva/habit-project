import { useEffect, useRef } from "react"

export default function TelegramLoginWidget() {
    const containerRef = useRef(null)

    useEffect(() => {
        // Очищаем контейнер перед добавлением, чтобы не плодить кнопки при ререндере
        if (containerRef.current) {
            containerRef.current.innerHTML = ""
            
            const script = document.createElement("script")
            script.src = "https://telegram.org/js/telegram-widget.js?22"
            script.async = true
            
            // Настройки виджета
            script.setAttribute("data-telegram-login", "my_mindful_test_bot")
            script.setAttribute("data-size", "large")
            script.setAttribute("data-radius", "10")
            script.setAttribute("data-request-access", "write")
            script.setAttribute("data-userpic", "true")
            
            // Куда перенаправить после успеха
            // Telegram сам добавит параметры пользователя в URL (auth/telegram?id=...&hash=...)
            script.setAttribute(
                "data-auth-url",
                window.location.origin + "/auth/telegram"
            )

            containerRef.current.appendChild(script)
        }
    }, [])

    return (
        <div 
            ref={containerRef} 
            className="telegram-widget-container"
            style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
        >
            {/* Сюда скрипт вставит кнопку */}
        </div>
    )
}
