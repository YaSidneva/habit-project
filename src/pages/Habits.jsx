import { useState } from 'react'
import './Dashboard.css'

import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import NewHabit from "../components/NewHabit.jsx";
import Footer from "../components/Footer.jsx";

export default function Habits() {
    const [isNewHabitOpen, setIsNewHabitOpen] = useState(false)

    return (
        <div className="habitsWrap">
            <Header />
            <main>
                <Sidebar onAddNew={() => setIsNewHabitOpen(true)} />
                <div className="dashboardMainContainer">
                    <div className="dashboardMain">
                        <div className="dashboardDesc">
                            <div className="dashboardDescHeader">My Habits</div>
                            <div className="dashboardDescText">This is where your journey takes shape. View and manage all your active habits here.</div>
                        </div>
                        {/* Здесь в будущем будет список привычек */}
                        <div style={{ marginTop: '20px', color: '#64748B' }}>
                            Your habits list will appear here...
                        </div>
                    </div>
                </div>
                {isNewHabitOpen && (
                    <NewHabit 
                        onClose={() => setIsNewHabitOpen(false)} 
                        onSave={(data) => {
                            console.log("Saving habit from Habits page:", data);
                            setIsNewHabitOpen(false);
                        }} 
                    />
                )}
            </main>
            <Footer />
        </div>
    )
}
