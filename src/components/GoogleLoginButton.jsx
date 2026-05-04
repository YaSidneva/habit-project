import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import './AuthForm.css'

export default function GoogleLoginButton() {

    const navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: (res) => {
            console.log(res)

            // можно сохранить пользователя
            localStorage.setItem('google_user', JSON.stringify(res))

            // 🚀 редирект
            navigate('/dashboard')
        },
        onError: () => {
            console.log('Login Failed')
        }
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