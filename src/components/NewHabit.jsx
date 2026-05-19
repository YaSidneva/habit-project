import { useState } from 'react'
import './NewHabit.css'
import habitsData from '../HabitsList.json'

export default function NewHabit({ onClose, onSave, isStatic = false }) {
    const { habitsList } = habitsData;
    const [isCustomCategoryVisible, setIsCustomCategoryVisible] = useState(false);
    
    // Form state
    const [habitName, setHabitName] = useState("");
    const [category, setCategory] = useState("");
    const [customCategory, setCustomCategory] = useState("");
    const [frequency, setFrequency] = useState("");

    const handleSave = () => {
        const finalCategory = customCategory || category;
        
        if (!habitName || !finalCategory || !frequency) {
            alert("Please fill in all fields");
            return;
        }

        const newHabit = {
            name: habitName,
            category: finalCategory,
            frequency: frequency,
            createdAt: new Date().toISOString()
        };

        if (onSave) {
            onSave(newHabit);
        }

        if (!isStatic && onClose) {
            onClose();
        } else {
            // Reset form if static
            setHabitName("");
            setCategory("");
            setCustomCategory("");
            setFrequency("");
            setIsCustomCategoryVisible(false);
        }
    };

    const categories = [
        { id: 'Mind', name: 'Mind', icon: (
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 16.6667V13.0833C1.70833 12.3611 1.09375 11.5174 0.65625 10.5521C0.21875 9.58681 0 8.56944 0 7.5C0 5.41667 0.729167 3.64583 2.1875 2.1875C3.64583 0.729167 5.41667 0 7.5 0C9.23611 0 10.7743 0.510417 12.1146 1.53125C13.4549 2.55208 14.3264 3.88194 14.7292 5.52083L15.8125 9.79167C15.8819 10.0556 15.8333 10.2951 15.6667 10.5104C15.5 10.7257 15.2778 10.8333 15 10.8333H13.3333V13.3333C13.3333 13.7917 13.1701 14.184 12.8438 14.5104C12.5174 14.8368 12.125 15 11.6667 15H10V16.6667H8.33333V13.3333H11.6667V13.3333V13.3333V9.16667H13.9167L13.125 5.9375C12.8056 4.67361 12.125 3.64583 11.0833 2.85417C10.0417 2.0625 8.84722 1.66667 7.5 1.66667C5.88889 1.66667 4.51389 2.22917 3.375 3.35417C2.23611 4.47917 1.66667 5.84722 1.66667 7.45833C1.66667 8.29167 1.83681 9.08333 2.17708 9.83333C2.51736 10.5833 3 11.25 3.625 11.8333L4.16667 12.3333V16.6667H2.5V16.6667M7.79167 9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667M6.66667 10.8333H8.33333L8.45833 9.79167C8.56944 9.75 8.67014 9.70139 8.76042 9.64583C8.85069 9.59028 8.93056 9.52778 9 9.45833L9.95833 9.875L10.7917 8.45833L9.95833 7.83333C9.98611 7.72222 10 7.61111 10 7.5C10 7.38889 9.98611 7.27778 9.95833 7.16667L10.7917 6.54167L9.95833 5.125L9 5.54167C8.93056 5.47222 8.85069 5.40972 8.76042 5.35417C8.67014 5.29861 8.56944 5.25 8.45833 5.20833L8.33333 4.16667H6.66667L6.54167 5.20833C6.43056 5.25 6.32986 5.29861 6.23958 5.35417C6.14931 5.40972 6.06944 5.47222 6 5.54167L5.04167 5.125L4.20833 6.54167L5.04167 7.16667C5.01389 7.27778 5 7.38889 5 7.5C5 7.61111 5.01389 7.72222 5.04167 7.83333L4.20833 8.45833L5.04167 9.875L6 9.45833C6.06944 9.52778 6.14931 9.59028 6.23958 9.64583C6.32986 9.70139 6.43056 9.75 6.54167 9.79167L6.66667 10.8333V10.8333M7.5 8.75C7.15278 8.75 6.85764 8.62847 6.61458 8.38542C6.37153 8.14236 6.25 7.84722 6.25 7.5C6.25 7.15278 6.37153 6.85764 6.61458 6.61458C6.85764 6.37153 7.5 6.37153 7.5 6.37153V6.37153" fill="#64748B"/>
            </svg>
        ) },
        { id: 'Health', name: 'Health', icon: (
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33333 15.2917L7.125 14.2083C5.72222 12.9444 4.5625 11.8542 3.64583 10.9375C2.72917 10.0208 2 9.19792 1.45833 8.46875C0.916667 7.73958 0.538194 7.06944 0.322917 6.45833C0.107639 5.84722 0 5.22222 0 4.58333C0 3.27778 0.4375 2.1875 1.3125 1.3125C2.1875 0.4375 3.27778 0 4.58333 0C5.30556 0 5.99306 0.152778 6.64583 0.458333C7.29861 0.763889 7.86111 1.19444 8.33333 1.75C8.80556 1.19444 9.36806 0.763889 10.0208 0.458333C10.6736 0.152778 11.3611 0 12.0833 0C13.3889 0 14.4792 0.4375 15.3542 1.3125C16.2292 2.1875 16.6667 3.27778 16.6667 4.58333C16.6667 5.22222 16.559 5.84722 16.3438 6.45833C16.1285 7.06944 15.75 7.73958 15.2083 8.46875C14.6667 9.19792 13.9375 10.0208 13.0208 10.9375C12.1042 11.8542 10.9444 12.9444 9.54167 14.2083L8.33333 15.2917V15.2917M8.33333 13.0417C9.66667 11.8472 10.7639 10.8229 11.625 9.96875C12.4861 9.11458 13.1667 8.37153 13.6667 7.73958C14.1667 7.10764 14.5139 6.54514 14.7083 6.05208C14.9028 5.55903 15 5.06944 15 4.58333C15 3.75 14.7222 3.05556 14.1667 2.5C13.6111 1.94444 12.9167 1.66667 12.0833 1.66667C11.4306 1.66667 10.8264 1.85069 10.2708 2.21875C9.71528 2.58681 9.33333 3.05556 9.125 3.625V3.625H7.54167V3.625C7.33333 3.05556 6.95139 2.58681 6.39583 2.21875C5.84028 1.85069 5.23611 1.66667 4.58333 1.66667C3.75 1.66667 3.05556 1.94444 2.5 2.5C1.94444 3.05556 1.66667 3.75 1.66667 4.58333C1.66667 5.06944 1.76389 5.55903 1.95833 6.05208C2.15278 6.54514 2.5 7.10764 3 7.73958C3.5 8.37153 4.18056 9.11458 5.04167 9.96875C5.90278 10.8229 7 11.8472 8.33333 13.0417V13.0417M8.33333 7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417V7.35417" fill="#64748B"/>
            </svg>
        ) },
        { id: 'Work', name: 'Work', icon: (
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66667 15.8333C1.20833 15.8333 0.815972 15.6701 0.489583 15.3438C0.163194 15.0174 0 14.625 0 14.1667V5C0 4.54167 0.163194 4.14931 0.489583 3.82292C0.815972 3.49653 1.20833 3.33333 1.66667 3.33333H5V1.66667C5 1.20833 5.16319 0.815972 5.48958 0.489583C5.81597 0.163194 6.20833 0 6.66667 0H10C10.4583 0 10.8507 0.163194 11.1771 0.489583C11.5035 0.815972 11.6667 1.20833 11.6667 1.66667V3.33333H15C15.4583 3.33333 15.8507 3.49653 16.1771 3.82292C16.5035 4.14931 16.6667 4.54167 16.6667 5V14.1667C16.6667 14.625 16.5035 15.0174 16.1771 15.3438C15.8507 15.6701 15.4583 15.8333 15 15.8333H1.66667V15.8333M1.66667 14.1667H15V14.1667V14.1667V5V5V5H1.66667V5V5V14.1667V14.1667V14.1667V14.1667M6.66667 3.33333H10V1.66667V1.66667V1.66667H6.66667V1.66667V1.66667V3.33333V3.33333M1.66667 14.1667V14.1667V14.1667V5V5V5V5V5V5V14.1667V14.1667V14.1667V14.1667V14.1667" fill="#64748B"/>
            </svg>
        ) },
        { id: 'Spirit', name: 'Spirit', icon: (
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.16667 13.3333C2.75 13.3333 2.39583 13.1875 2.10417 12.8958C1.8125 12.6042 1.66667 12.25 1.66667 11.8333C1.66667 11.5417 1.75 11.2674 1.91667 11.0104C2.08333 10.7535 2.30556 10.5694 2.58333 10.4583L5.83333 9.16667V7.29167C5.08333 8.16667 4.21181 8.83681 3.21875 9.30208C2.22569 9.76736 1.15278 10 0 10V8.33333C0.944444 8.33333 1.80208 8.13889 2.57292 7.75C3.34375 7.36111 4.04167 6.80556 4.66667 6.08333L5.79167 4.75C5.95833 4.55556 6.15278 4.40972 6.375 4.3125C6.59722 4.21528 6.83333 4.16667 7.08333 4.16667H7.91667C8.16667 4.16667 8.40278 4.21528 8.625 4.3125C8.84722 4.40972 9.04167 4.55556 9.20833 4.75L10.3333 6.08333C10.9583 6.80556 11.6562 7.36111 12.4271 7.75C13.1979 8.13889 14.0556 8.33333 15 8.33333V10C13.8472 10 12.7743 9.76736 11.7812 9.30208C10.7882 8.83681 9.91667 8.16667 9.16667 7.29167V9.16667L12.4167 10.4583C12.6944 10.5694 12.9167 10.7535 13.0833 11.0104C13.25 11.2674 13.3333 11.5417 13.3333 11.8333C13.3333 12.25 13.1875 12.6042 12.8958 12.8958C12.6042 13.1875 12.25 13.3333 11.8333 13.3333H5.83333V12.9167C5.83333 12.5556 5.95139 12.2569 6.1875 12.0208C6.42361 11.7847 6.72222 11.6667 7.08333 11.6667H9.58333C9.70833 11.6667 9.80903 11.6285 9.88542 11.5521C9.96181 11.4757 10 11.375 10 11.25C10 11.125 9.96181 11.0243 9.88542 10.9479C9.80903 10.8715 9.70833 10.8333 9.58333 10.8333H7.08333C6.5 10.8333 6.00694 11.0347 5.60417 11.4375C5.20139 11.8403 5 12.3333 5 12.9167V13.3333H3.16667V13.3333M7.5 3.33333C7.04167 3.33333 6.64931 3.17014 6.32292 2.84375C5.99653 2.51736 5.83333 2.125 5.83333 1.66667C5.83333 1.20833 5.99653 0.815972 6.32292 0.489583C6.64931 0.163194 7.04167 0 7.5 0C7.95833 0 8.35069 0.163194 8.67708 0.489583C9.00347 0.815972 9.16667 1.20833 9.16667 1.66667C9.16667 2.125 9.00347 2.51736 8.67708 2.84375C8.35069 3.17014 7.95833 3.33333 7.5 3.33333V3.33333" fill="#64748B"/>
            </svg>
        ) },
    ];

    const frequencies = ['Daily', 'Weekly', 'Monthly', 'Custom'];

    const containerContent = (
        <div className={`newHabitContainer ${isStatic ? 'static' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="newHabitContainerHeader">
                <div className="newHabitContainerHeaderName">Add New Habit</div>
                {!isStatic && (
                    <div className="newHabitContainerHeaderClose" onClick={onClose}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14V14" fill="#94A3B8"/>
                        </svg>
                    </div>
                )}
            </div>
            <div className="newHabitContainerMain">
                <div className="habitInput habitName">
                    <label htmlFor="name" className="habitInputName">Habit Name</label>
                    <input
                        className="inputWrap"
                        type="text"
                        id="name"
                        list="habitSuggestions"
                        placeholder="e.g., Morning Yoga"
                        value={habitName}
                        onChange={(e) => setHabitName(e.target.value)}
                        required
                    />
                    <datalist id="habitSuggestions">
                        {habitsList.map((habit, index) => (
                            <option key={index} value={habit} />
                        ))}
                    </datalist>
                </div>
                <div className="habitInput habitCategories">
                    <div className="habitInputName">Select Category</div>
                    <div className="habitCategoryBlock">
                        {categories.map((cat) => (
                            <div 
                                key={cat.id}
                                className={`habitCategory ${category === cat.name ? 'selected' : ''}`}
                                onClick={() => {
                                    setCategory(cat.name);
                                    setCustomCategory("");
                                    setIsCustomCategoryVisible(false);
                                }}
                            >
                                <div className="habitCategoryIcon">{cat.icon}</div>
                                <div className="habitCategoryText">{cat.name}</div>
                            </div>
                        ))}
                    </div>
                    <div className="addOwnCategory" onClick={() => {
                        setIsCustomCategoryVisible(true);
                        setCategory("");
                    }}>
                        <b>+</b> OR ADD CUSTOM CATEGORY
                    </div>
                    {isCustomCategoryVisible && (
                        <input
                            className="inputWrap customCategoryInput"
                            type="text"
                            placeholder="e.g., Home"
                            autoFocus
                            value={customCategory}
                            onChange={(e) => setCustomCategory(e.target.value)}
                            onBlur={(e) => {
                                if (e.target.value.trim() === "") {
                                    setIsCustomCategoryVisible(false);
                                }
                            }}
                            required
                        />
                    )}
                </div>
                <div className="habitInput habitFrequency">
                    <div className="habitFrequencyHeader">Frequency</div>
                    <div className="habitFrequencyBlock">
                        {frequencies.map((f) => (
                            <div 
                                key={f}
                                className={`habitFrequencyItem ${frequency === f ? 'selected' : ''}`}
                                onClick={() => setFrequency(f)}
                            >
                                {f}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="newHabitContainerFooter">
                {!isStatic && <button className="newHabitContainerButton newHabitContainerButtonCancel" onClick={onClose}>Cancel</button>}
                <button 
                    className="newHabitContainerButton newHabitContainerButtonStart" 
                    onClick={handleSave}
                    style={isStatic ? { gridColumn: 'span 2' } : {}}
                >
                    Start Climbing
                </button>
            </div>
        </div>
    );

    if (isStatic) {
        return containerContent;
    }

    return (
        <div className="newHabitOverlay" onClick={onClose}>
            {containerContent}
        </div>
    )
}
