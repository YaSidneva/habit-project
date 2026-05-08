import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleLoginButton from './GoogleLoginButton'
import TelegramLoginWidget from './TelegramLoginWidget'
import './AuthForm.css'

export default function AuthForm() {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        // Имитация базы данных в localStorage
        const users = JSON.parse(localStorage.getItem('registered_users') || '[]')

        if (isLogin) {
            // ЛОГИКА ВХОДА
            const user = users.find(u => u.email === email && u.password === password)
            if (user) {
                localStorage.setItem('user', JSON.stringify({ ...user, type: 'email' }))
                navigate('/dashboard')
            } else {
                setError('Invalid email or password.')
            }
        } else {
            // ЛОГИКА РЕГИСТРАЦИИ
            const existingUser = users.find(u => u.email === email)
            
            if (existingUser) {
                if (existingUser.type === 'google') {
                    setError('This email is already registered via Google. Please use Google Login.')
                } else {
                    setError('This email is already registered. Please Login.')
                }
                return
            }

            const newUser = {
                email,
                password,
                name: email.split('@')[0],
                type: 'email',
                createdAt: new Date().toISOString()
            }

            users.push(newUser)
            localStorage.setItem('registered_users', JSON.stringify(users))
            localStorage.setItem('user', JSON.stringify(newUser))
            navigate('/dashboard')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="authLogSign">
                <button 
                    type="button" 
                    className={`authLogSignBtn logBtn ${isLogin ? 'active' : ''}`}
                    onClick={() => { setIsLogin(true); setError(''); }}
                >
                    Login
                </button>
                <button 
                    type="button" 
                    className={`authLogSignBtn signBtn ${!isLogin ? 'active' : ''}`}
                    onClick={() => { setIsLogin(false); setError(''); }}
                >
                    Sign Up
                </button>
            </div>
            <div className="formContainer">
                {error && <div style={{ color: '#ff4d4d', fontSize: '12px', marginBottom: '10px', textAlign: 'center' }}>{error}</div>}
                
                <div className="formInput formEmail">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input 
                        className="inputWrap" 
                        type="email" 
                        id="email" 
                        placeholder="climber@ascent.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>

                <div className="formInput formPassword">
                    <label htmlFor="password">PASSWORD</label>
                    <input 
                        className="inputWrap" 
                        type="password" 
                        id="password"  
                        placeholder="your password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>

                <div className="formStay">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Stay logged in for the climb</label>
                </div>

                <button type="submit" className="formEnter">
                    {isLogin ? 'Enter Mindful' : 'Join Mindful'}
                </button>
                
                <div className="formOr">OR CONTINUE WITH</div>
                
                <div className="formButtonAccountBlock">
                    <GoogleLoginButton />
                    <TelegramLoginWidget />
                </div>
            </div>

            <div className="authFormTerms">
                <div className="authFormTermsText">By entering, you agree to </div>
                <a className="authFormTermsLink" href="#">the Terms of Ascent and Quiet Policy.</a>
            </div>
        </form>
    )
}
