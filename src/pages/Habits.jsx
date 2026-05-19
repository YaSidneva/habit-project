import { useState } from 'react'
import './Habits.css'

import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import NewHabit from "../components/NewHabit.jsx";
import Footer from "../components/Footer.jsx";
import HabitsMainContainer from "../components/HabitsMainContainer.jsx";

export default function Habits() {
    const handleSaveHabit = (habitData) => {
        console.log("New Habit Created from Habits page:", habitData);
        // Здесь будет логика сохранения в будущем
    };

    return (
        <div className="habitsWrap">
            <Header />
            <main>
                <Sidebar onAddNew={() => {}} />
                <HabitsMainContainer />
            </main>
            <Footer />
        </div>
    )
}
