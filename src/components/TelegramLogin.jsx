import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./AuthForm.css"

export default function TelegramLogin() {
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = () => {
        const botId = '8650457875'; 
        const origin = window.location.origin;
        // force=1 заставляет Telegram перепроверить права доступа
        const authUrl = `https://oauth.telegram.org/auth?bot_id=${botId}&origin=${encodeURIComponent(origin)}&force=1`;

        console.log('--- Telegram Auth Debug ---');
        console.log('Bot ID:', botId);
        console.log('Current Origin:', origin);
        console.log('Full Auth URL:', authUrl);
        console.log('---------------------------');

        // Открываем в маленьком всплывающем окне
        window.open(authUrl, 'tgAuth', 'width=550,height=600,left=300,top=100');
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