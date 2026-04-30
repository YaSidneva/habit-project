import { useEffect, useRef } from "react"

export default function TelegramLoginWidget() {
    const containerRef = useRef(null)

    useEffect(() => {
        const script = document.createElement("script")

        script.src = "https://telegram.org/js/telegram-widget.js?22"
        script.async = true

        script.setAttribute("data-telegram-login", "YOUR_BOT_NAME")
        script.setAttribute("data-size", "large")
        script.setAttribute("data-userpic", "false")
        script.setAttribute(
            "data-auth-url",
            "https://habit-project-nine.vercel.app/auth/telegram"
        )

        containerRef.current.appendChild(script)
    }, [])

    return <div ref={containerRef}></div>
}