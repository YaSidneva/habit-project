import { useEffect, useRef } from "react"

export default function TelegramLoginWidget() {
    const containerRef = useRef(null)

    useEffect(() => {
        if (!containerRef.current) return
        containerRef.current.innerHTML = ""
        
        const script = document.createElement("script")
        script.src = "https://telegram.org/js/telegram-widget.js?22"
        script.async = true
        
        // Минимальные настройки
        script.setAttribute("data-telegram-login", "my_mindful_test_bot")
        script.setAttribute("data-size", "large")
        script.setAttribute("data-userpic", "true")
        
        // Используем прямой редирект, это надежнее для первого раза
        script.setAttribute(
            "data-auth-url",
            window.location.origin + "/auth/telegram"
        )

        containerRef.current.appendChild(script)
    }, [])

    return (
        <div 
            ref={containerRef} 
            className="telegram-widget-container"
            style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
        >
        </div>
    )
}
