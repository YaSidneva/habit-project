import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null

    const userName = user?.name || user?.first_name || 'Climber'
    const userPhoto = user?.picture || user?.photo_url || null

    const handleProtectedClick = (e, targetId) => {
        if (!user) {
            e.preventDefault()
            if (location.pathname !== '/') {
                // Если мы не на главной, сначала переходим туда
                navigate('/#auth-section')
            } else {
                // Если на главной, просто скроллим
                const element = document.getElementById('auth-section')
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }
    }

    return (
        <header>
            <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <div className="logoImg"></div>
                <div>Mindful</div>
            </div>

            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/" onClick={(e) => handleProtectedClick(e, 'auth-section')}>Leaderboard</Link>
                <Link to="/" onClick={(e) => handleProtectedClick(e, 'auth-section')}>Statistics</Link>
                <Link to="/" onClick={(e) => handleProtectedClick(e, 'auth-section')}>Settings</Link>
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