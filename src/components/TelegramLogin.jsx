import { useState, useEffect, useRef } from "react"
import "./AuthForm.css"

export default function TelegramLogin() {
    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        if (!open) return

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
    }, [open])

    return (
        <>
            {/* ТВОЯ КНОПКА */}
            <button
                type="button"
                className="formButtonAccount formButtonTelegram"
                onClick={() => setOpen(true)}
            >
                <div className="formButtonAccountIcon formButtonTelegramIcon"></div>
                <div className="formButtonAccountName formButtonTelegramName">
                    Telegram
                </div>
            </button>

            {/* OVERLAY */}
            {open && (
                <div className="modalOverlay" onClick={() => setOpen(false)}>
                    <div
                        className="modalCard"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modalClose"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>

                        <div ref={containerRef} />
                    </div>
                </div>
            )}
        </>
    )
}