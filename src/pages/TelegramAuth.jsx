import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TelegramAuth() {

    const navigate = useNavigate()

    useEffect(() => {

        const params = new URLSearchParams(window.location.search)

        const user = {
            id: params.get('id'),
            first_name: params.get('first_name'),
            username: params.get('username'),
            auth_date: params.get('auth_date')
        }

        console.log('Telegram user:', user)

        // ❗ ПРОВЕРКА ДАННЫХ
        if (user.id) {

            localStorage.setItem('telegram_user', JSON.stringify(user))

            navigate('/dashboard')

        } else {
            console.log('No Telegram user data received')
            navigate('/login')
        }

    }, [])

    return <div>Logging in via Telegram...</div>
}