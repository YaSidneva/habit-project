import './NewHabit.css'

export default function NewHabit() {
    return (
        <div className="newHabitContainer">
            <div className="newHabitContainerHeader">
                <div className="newHabitContainerHeaderName">Add New Habit</div>
                <div className="newHabitContainerHeaderClose"></div>
            </div>
            <div className="newHabitContainerMain">
                <div className="habitInput habitName">
                    <label htmlFor="name">Habit Name</label>
                    <input
                        className="inputWrap"
                        type="text"
                        id="name"
                        placeholder="e.g., Morning Yoga"
                        required
                    />
                </div>
                <div className="habitInput habitCategory">
                    <label htmlFor="category">Select Category</label>
                    <div className="habitCategoryBlock">
                        <input
                            className="inputWrap"
                            type="text"
                            id="category"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="newHabitContainerFooter">
                <button className="newHabitContainerButton newHabitContainerButtonCancel">Cancel</button>
                <button className="newHabitContainerButton newHabitContainerButtonStart">Start Climbing</button>
            </div>
        </div>
    )
}
