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
                    <label htmlFor="name" className="habitInputName">Habit Name</label>
                    <input
                        className="inputWrap"
                        type="text"
                        id="name"
                        placeholder="e.g., Morning Yoga"
                        required
                    />
                </div>
                <div className="habitInput habitCategory">
                    <div className="habitInputName">Select Category</div>
                    <div className="habitCategoryBlock">
                        <div className="habitCategory">
                            <div className="habitCategoryIcon"></div>
                            <div className="habitCategoryText">Mind</div>
                        </div>
                        <div className="habitCategory">
                            <div className="habitCategoryIcon"></div>
                            <div className="habitCategoryText">Health</div>
                        </div>
                        <div className="habitCategory">
                            <div className="habitCategoryIcon"></div>
                            <div className="habitCategoryText">Work</div>
                        </div>
                        <div className="habitCategory">
                            <div className="habitCategoryIcon"></div>
                            <div className="habitCategoryText">Spirit</div>
                        </div>
                    </div>
                    <div className="addOwnCategory">OR ADD CUSTOM CATEGORY</div>
                </div>
                <div className="habitInput habitFrequency">
                    <div className="habitFrequencyItem">Daily</div>
                    <div className="habitFrequencyItem">Weekly</div>
                    <div className="habitFrequencyItem">Monthly</div>
                    <div className="habitFrequencyItem">Custom</div>
                </div>
            </div>

            <div className="newHabitContainerFooter">
                <button className="newHabitContainerButton newHabitContainerButtonCancel">Cancel</button>
                <button className="newHabitContainerButton newHabitContainerButtonStart">Start Climbing</button>
            </div>
        </div>
    )
}
