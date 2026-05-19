import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null

    const userName = user?.name || user?.first_name || user?.username || 'User'
    const userPhoto = user?.picture || user?.photo_url || null

    const handleProtectedClick = (e, targetId) => {
        if (location.pathname === '/') {
            if (!user) {
                e.preventDefault()
                // Скроллим к форме на главной для гостей
                const element = document.getElementById('auth-section')
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            } else {
                // Если залогинен на главной, пока ничего не делаем (заглушка)
                e.preventDefault()
            }
        } else {
            // В Dashboard и на других страницах просто блокируем клик (заглушка)
            e.preventDefault()
        }
    }

    return (
        <header>
            <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <div className="logoImg"></div>
                <div>Mindful</div>
            </div>

            <nav>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink>
                <NavLink to="/habits" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Habits</NavLink>
                <NavLink to="/leaderboard" onClick={(e) => handleProtectedClick(e, 'auth-section')} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Leaderboard</NavLink>
                <NavLink to="/statistics" onClick={(e) => handleProtectedClick(e, 'auth-section')} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Statistics</NavLink>
                <NavLink to="/settings" onClick={(e) => handleProtectedClick(e, 'auth-section')} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Settings</NavLink>
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
