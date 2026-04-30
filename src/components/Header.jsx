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
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/">Leaderboard</Link>
                <Link to="/">Statistics</Link>
                <Link to="/">Settings</Link>
            </nav>
            <div className="headerSettingsBlock">
                <div className="headerSettings">
                    <div className="headerSettingsNotification"></div>
                    <div className="headerSettingsOptions"></div></div>
                <div className="headerProfile">
                    <div className="headerProfileName">User</div>
                    <div className="headerProfileAvatar"></div>
                </div>
            </div>

        </header>
    )
}