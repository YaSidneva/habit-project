import { Link } from 'react-router-dom'
import GoogleLoginButton from './GoogleLoginButton'
import TelegramLoginWidget from './TelegramLoginWidget'
import './AuthForm.css'

export default function AuthForm() {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="authLogSign">
                <button type="button" className="authLogSignBtn logBtn">Login</button>
                <button type="button" className="authLogSignBtn signBtn">Sign Up</button>
            </div>
            <div className="formContainer">
                <div className="formInput formEmail">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input 
                        className="inputWrap" 
                        type="email" 
                        id="email" 
                        placeholder="climber@ascent.com" 
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
                        required 
                    />
                </div>

                <div className="formStay">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Stay logged in for the climb</label>
                </div>

                <button type="button" className="formEnter">Enter Mindful</button>
                
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
