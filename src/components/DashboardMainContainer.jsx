import { Link } from 'react-router-dom'

import './DashboardMainContainer.css'

export default function DashboardMainContainer() {
    return (
        <div className="dashboardMainContainer">
            <div className="dashboardMain">
                <div className="dashboardImg"></div>
                <div className="dashboardDesc">
                    <div className="dashboardDescHeader">The Path Begins Here</div>
                    <div className="dashboardDescText">Every great journey starts with a single step. Add your
                        first habit to begin your ascent toward a more
                        intentional life.</div>
                </div>
                <button className="dashboardNewHabit"><div className="addHabitIcon">+</div> + Add Your First Habit</button>
                <div className="dashboardSuggestedHabits">
                    <button className="dashboardSuggestedHabitsItem">Daily Meditation</button>
                    <button className="dashboardSuggestedHabitsItem">Morning Walk</button>
                    <button className="dashboardSuggestedHabitsItem">Digital Detox</button>
                    <button className="dashboardSuggestedHabitsItem">Bedtime Reading</button>
                </div>
            </div>
        </div>

    )
}