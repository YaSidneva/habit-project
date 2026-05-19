import { Link } from 'react-router-dom'

import './HabitsMainContainer.css'
import NewHabit from "./NewHabit.jsx";
import HabitItem from "./HabitItem.jsx";

export default function HabitsMainContainer() {
    return (
        <div className="habitsMainContainer">
            <div className="habitsMainContainerHeader">
                <div className="habitsMainContainerHederTitle">Your Habits</div>
                <div className="habitsMainContainerHederDesc">
                    Continue your steady climb toward consistency.
                </div>
            </div>
            <div className="habitsMainContainerBody">
                <div className="habitsListContainer">
                    <HabitItem />
                    <HabitItem />
                    <HabitItem />

                </div>

                <div className="habitsNewHabitContainer">
                    <NewHabit
                        isStatic={true}
                    />
                </div>
            </div>
        </div>

    );

}


