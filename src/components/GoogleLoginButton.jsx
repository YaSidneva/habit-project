import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AuthForm.css'

export default function GoogleLoginButton() {
    const navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                // 1. tokenResponse содержит только access_token.
                // Нам нужно сходить к Google и спросить: "Кто это такой?"
                const userInfo = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: {
                            Authorization: `Bearer ${tokenResponse.access_token}`
                        },
                    }
                )

                // 2. Теперь у нас есть объект с данными: email, name, picture
                console.log('Данные из Google:', userInfo.data)

                // СИНХРОНИЗАЦИЯ С "БАЗОЙ ДАННЫХ"
                const users = JSON.parse(localStorage.getItem('registered_users') || '[]')
                const existingUser = users.find(u => u.email === userInfo.data.email)

                if (!existingUser) {
                    users.push({
                        email: userInfo.data.email,
                        name: userInfo.data.name,
                        picture: userInfo.data.picture,
                        type: 'google',
                        createdAt: new Date().toISOString()
                    })
                    localStorage.setItem('registered_users', JSON.stringify(users))
                }

                // 3. Сохраняем в localStorage, чтобы Dashboard видел, что мы вошли
                localStorage.setItem('user', JSON.stringify({
                    type: 'google',
                    ...userInfo.data
                }))

                // 4. Улетаем на Dashboard
                navigate('/dashboard')
            } catch (error) {
                console.error('Ошибка при получении данных профиля:', error)
            }
        },
        onError: (error) => console.log('Ошибка авторизации:', error),
        // Это помогает избежать некоторых проблем с блокировкой окон в Chrome
        flow: 'implicit',
    })

    return (
        <button
            type="button"
            className="formButtonAccount formButtonGoogle"
            onClick={() => login()}
        >
            <div className="formButtonAccountIcon formButtonGoogleIcon"></div>
            <span className="formButtonAccountName formButtonGoogleName">
                Google
            </span>
        </button>
    )
}