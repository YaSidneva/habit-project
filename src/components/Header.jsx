import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null

    const userName = user?.name || user?.first_name || user?.username || 'User'
    const userPhoto = user?.picture || user?.photo_url || null

    const handleProtectedClick = (e, targetId) => {
        if (!user && location.pathname === '/') {
            e.preventDefault()
            // Если мы на главной и не залогинены, просто скроллим к форме
            const element = document.getElementById('auth-section')
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
        // Если мы на другой странице (например, Dashboard), 
        // Link сработает стандартно и просто перекинет на "/"
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
                    <div className="headerProfileAvatar" style={userPhoto ? { backgroundImage: `url(${userPhoto})`, backgroundSize: 'cover' } : { backgroundColor: '#E2E8F0' }}></div>
                </div>
            </div>

        </header>
    )
}
