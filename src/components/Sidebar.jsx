import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebarProfile">
            <div className="sidebarProfileName">User</div>
            <div className="sidebarProfileAvatar"></div>
        </div>
            <button className="addNewHabbit">+ New Habit</button>
            <nav className="sidebarNav">
                <Link to="/dashboard" className="sidebarNavItem"> <div className="sidebarNavIcon sidebarIconDashboard"></div>Dashboard</Link>
                <Link to="/" className="sidebarNavItem"> <div className="sidebarNavIcon sidebarIconLeaderboard"></div>Leaderboard</Link>
                <Link to="/" className="sidebarNavItem"> <div className="sidebarNavIcon sidebarIconStatistics"></div>Statistics</Link>
                <Link to="/" className="sidebarNavItem"><div className="sidebarNavIcon sidebarIconSettings"></div>Settings</Link>
            </nav>
        </div>
    )
}