import { useState, useEffect, useRef } from "react"
import "./AuthForm.css"

export default function TelegramLogin() {
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(1)
    const containerRef = useRef(null)

    // 👉 подключаем Telegram widget ТОЛЬКО на шаге 2
    useEffect(() => {
        if (step !== 2) return

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
    }, [step])

    // 👉 шаг 1 — открыть бота
    const openBot = () => {
        window.open("https://t.me/Mindful_auth_bot", "_blank")
        setStep(2)
    }

    return (
        <>
            {/* ТВОЯ КНОПКА */}
            <button
                type="button"
                className="formButtonAccount formButtonTelegram"
                onClick={() => {
                    setOpen(true)
                    setStep(1)
                }}
            >
                <div className="formButtonAccountIcon formButtonTelegramIcon"></div>
                <div className="formButtonAccountName formButtonTelegramName">
                    Telegram
                </div>
            </button>

            {/* MODAL */}
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

                        {/* ШАГ 1 */}
                        {step === 1 && (
                            <div className="tgStep">
                                <h3>Вход через Telegram</h3>
                                <p>
                                    1. Откройте нашего бота
                                    <br />
                                    2. Нажмите <b>Start</b>
                                    <br />
                                    3. Вернитесь и продолжите
                                </p>

                                <button
                                    className="tgActionBtn"
                                    onClick={openBot}
                                >
                                    Открыть бота
                                </button>
                            </div>
                        )}

                        {/* ШАГ 2 */}
                        {step === 2 && (
                            <div className="tgStep">
                                <h3>Подтвердите вход</h3>
                                <p>Теперь нажмите кнопку ниже:</p>

                                <div ref={containerRef} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}