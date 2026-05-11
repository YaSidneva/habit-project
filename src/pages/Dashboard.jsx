import { useState } from 'react'
import './Dashboard.css'

import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import DashboardMainContainer from "../components/DashboardMainContainer.jsx";
import Footer from "../components/Footer.jsx";
import NewHabit from "../components/NewHabit.jsx";

export default function Dashboard() {
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null
    
    const [isNewHabitOpen, setIsNewHabitOpen] = useState(false)

    return (
        <div className="mainSection">
            <Header />
            <main>
                <Sidebar onAddNew={() => setIsNewHabitOpen(true)} />
                <DashboardMainContainer onAddNew={() => setIsNewHabitOpen(true)} />
                {isNewHabitOpen && <NewHabit onClose={() => setIsNewHabitOpen(false)} />}
            </main>
            <Footer/>
        </div>
    )
}