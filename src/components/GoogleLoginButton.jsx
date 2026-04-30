import { useGoogleLogin } from '@react-oauth/google'
import './AuthForm.css'

export default function GoogleLoginButton() {

    const login = useGoogleLogin({
        onSuccess: (res) => {
            console.log(res)
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