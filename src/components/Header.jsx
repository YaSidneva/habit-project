import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null

    const userName = user?.name || user?.first_name || 'Climber'
    const userPhoto = user?.picture || user?.photo_url || null

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
                    <div className="headerProfileName">{userName}</div>
                    <div className="headerProfileAvatar" style={userPhoto ? { backgroundImage: `url(${userPhoto})`, backgroundSize: 'cover' } : {}}></div>
                </div>
            </div>

        </header>
    )
}