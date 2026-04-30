import { useState, useEffect, useRef } from "react"
import "./AuthForm.css"

export default function TelegramLogin() {
    const [showWidget, setShowWidget] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        if (!showWidget) return

        const script = document.createElement("script")
        script.src = "https://telegram.org/js/telegram-widget.js?22"
        script.async = true

        script.setAttribute("data-telegram-login", "Mindful_auth_bot")
        script.setAttribute("data-size", "large")
        script.setAttribute("data-userpic", "false")
        script.setAttribute(
            "data-auth-url",
            "https://habit-project-nine.vercel.app/auth/telegram"
        )

        containerRef.current.innerHTML = ""
        containerRef.current.appendChild(script)
    }, [showWidget])

    return (
        <div className="telegramLoginWrapper">

            <button
                type="button"
                className="formButtonAccount formButtonTelegram"
                onClick={() => setShowWidget(true)}
            >
                <div className="formButtonAccountIcon formButtonTelegramIcon"></div>
                <div className="formButtonAccountName formButtonTelegramName">
                    Telegram
                </div>
            </button>

            {showWidget && (
                <div
                    ref={containerRef}
                    className="telegramWidgetPopup"
                />
            )}
        </div>
    )
}