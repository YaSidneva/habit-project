import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img className="logoImg" src="../assets/logo.png" alt="logo"></img>
                <div>Mindful</div></div>

            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
}