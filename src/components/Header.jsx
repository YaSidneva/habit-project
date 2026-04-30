import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <div className="logoImg"></div>
                <div>Mindful</div>
            </div>

            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
}