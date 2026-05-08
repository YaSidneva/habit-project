import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null

    const userName = user?.name || user?.first_name || user?.username || 'User'
    const userPhoto = user?.picture || user?.photo_url || null

    return (
        <div className="sidebar">
        <div className="sidebarProfile">
            <div className="sidebarProfileAvatar" style={userPhoto ? { backgroundImage: `url(${userPhoto})`, backgroundSize: 'cover' } : { backgroundColor: '#E2E8F0' }}></div>
            <div className="sidebarProfileName">{userName}</div>
        </div>
            <button className="addNewHabit">+ New Habit</button>
            <nav className="sidebarNav">
                <Link to="/dashboard" className="sidebarNavItem sidebarNavDashboard"> <svg  className="sidebarNavIcon sidebarIconDashboard" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6V0H18V6H10V6M0 10V0H8V10H0V10M10 18V8H18V18H10V18M0 18V12H8V18H0V18M2 8H6V2H2V8V8M12 16H16V10H12V16V16M12 4H16V2H12V4V4M2 16H6V14H2V16V16M6 8V8V8V8V8V8M12 4V4V4V4V4V4M12 10V10V10V10V10V10M6 14V14V14V14V14V14" fill="#64748B"/>
                </svg>Dashboard</Link>
                <Link to="/" className="sidebarNavItem"> <div className="sidebarNavIcon sidebarIconLeaderboard"></div>Leaderboards</Link>
                <Link to="/" className="sidebarNavItem"> <div className="sidebarNavIcon sidebarIconStatistics"></div>Statistics</Link>
                <Link to="/" className="sidebarNavItem"><div className="sidebarNavIcon sidebarIconSettings"></div>Settings</Link>
            </nav>
        </div>
    )
}
