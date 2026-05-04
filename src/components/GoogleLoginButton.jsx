import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' // установи через npm install axios
import './AuthForm.css'

export default function GoogleLoginButton() {
    const navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                // Получаем реальные данные пользователя, используя access_token
                const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                })

                // Теперь в res.data лежат: email, name, picture
                localStorage.setItem('google_user', JSON.stringify(res.data))

                console.log('Данные пользователя:', res.data)
                navigate('/dashboard')
            } catch (err) {
                console.error('Ошибка получения данных профиля:', err)
            }
        },
        onError: (error) => console.log('Login Failed:', error),
    })

    return (
        <button
            type="button"
            className="formButtonAccount formButtonGoogle"
            onClick={() => login()}
        >
            <div className="formButtonAccountIcon formButtonGoogleIcon"></div>
            <div className="formButtonAccountName formButtonGoogleName">
                Google
            </div>
        </button>
    )
}