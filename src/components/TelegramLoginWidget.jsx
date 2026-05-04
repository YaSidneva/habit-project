import { useEffect, useRef } from "react"

export default function TelegramLoginWidget() {
    const containerRef = useRef(null)

    useEffect(() => {
        if (step !== 2) return

        const div = document.createElement("div")
        div.className = "telegram-login-button"

        div.setAttribute("data-telegram-login", "Mindful_auth_bot")
        div.setAttribute("data-size", "large")
        div.setAttribute("data-userpic", "false")
        div.setAttribute(
            "data-auth-url",
            "https://habit-project-nine.vercel.app/auth/telegram"
        )

        containerRef.current.innerHTML = ""
        containerRef.current.appendChild(div)

        const script = document.createElement("script")
        script.src = "https://telegram.org/js/telegram-widget.js?22"
        script.async = true
        document.body.appendChild(script)

    }, [step])
}

