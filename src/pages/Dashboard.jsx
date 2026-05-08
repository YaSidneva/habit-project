import './Dashboard.css'

import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import DashboardMainContainer from "../components/DashboardMainContainer.jsx";
import Footer from "../components/Footer.jsx";
import NewHabit from "../components/NewHabit.jsx";

export default function Dashboard() {
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null

    return (
        <div className="mainSection">
            <Header />
            <main>
                <Sidebar />
                <DashboardMainContainer/>
                <NewHabit />
            </main>
            <Footer/>
        </div>
    )
}