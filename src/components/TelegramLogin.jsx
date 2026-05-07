import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./AuthForm.css"

export default function TelegramLogin() {
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = () => {
        const botId = '8623908798'; 
        const origin = window.location.origin;

        const authUrl = `https://oauth.telegram.org/auth?bot_id=${botId}&origin=${encodeURIComponent(origin)}&embed=1`;

        // Возвращаемся к переходу в той же вкладке, так как App.jsx теперь ловит хэш везде
        window.location.assign(authUrl);
    };

    return (
        <button
            type="button"
            className={`formButtonAccount formButtonTelegram ${isLoading ? 'loading' : ''}`}
            onClick={handleLogin}
            disabled={isLoading}
        >
            <div className="formButtonAccountIcon formButtonTelegramIcon"></div>
            <div className="formButtonAccountName formButtonTelegramName">
                {isLoading ? "Загрузка..." : "Telegram"}
            </div>
        </button>
    )
}