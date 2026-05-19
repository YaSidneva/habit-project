import { Link } from 'react-router-dom'
import './HabitItem.css'

export default function HabitItem() {
    return (
        <div className="habitItem">
            <div className="habitItemHeader">
                <div className="habitItemHeaderImg"></div>
                <div className="habitItemHeaderButtons">
                    <button className="habitItemHeaderButton habitItemHeaderButtonEdit"></button>
                    <button className="habitItemHeaderButton habitItemHeaderButtonSettings"></button>
                </div>
            </div>
            <div className="habitItemBody">
                <div className="habitItemTitle">Daily Meditation</div>
                <div className="habitItemDesc"><div className="habitItemCategory">
                    Mind
                </div>
                    <div className="habitItemFrequency">
                    Daily
                </div>
                </div>


                <div className="habitItemStreak">
                    <div className="habitItemStreakHeader">STREAK</div>
                    <div className="habitItemStreakTime">12 days</div>
                </div>
            </div>
        </div>
    )
}