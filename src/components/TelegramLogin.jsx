import { useEffect } from 'react'
import './AuthForm.css'

export default function TelegramLogin() {

    const handleLogin = () => {

        const botId = "8623908798"

        const baseUrl = "https://habit-project-nine.vercel.app"

        const url =
            `https://oauth.telegram.org/auth?bot_id=${botId}` +
            `&origin=${baseUrl}` +
            `&return_to=${baseUrl}/auth/telegram`

        window.location.href = url
    }

    return (
        <button
            type="button"
            className="formButtonAccount formButtonTelegram"
            onClick={handleLogin}
        >
            <div className="formButtonAccountIcon formButtonTelegramIcon"></div>
            <div className="formButtonAccountName formButtonTelegramName">
                Telegram
            </div>
        </button>
    )
}

// <button type="button" className="formButtonAccount formButtonTelegram">
//     <div className="formButtonAccountIcon formButtonTelegramIcon"></div>
//     <div className="formButtonAccountName formButtonTelegramName">Telegram</div>
// </button>