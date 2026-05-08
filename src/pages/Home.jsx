import { useEffect } from 'react'
import './Home.css'
import Header from '../components/Header.jsx'
import AuthForm from '../components/AuthForm.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
    useEffect(() => {
        if (window.location.hash === '#auth-section') {
            const element = document.getElementById('auth-section')
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        }
    }, [])

    return (
        <div className="mainSection">
            <Header />
            <div className="mainContainer">
            <div className="heroSection">

                <div className="heroSectionContainer">
                    <div className="heroSectionContainerInfo">
                        <h1>Find focus in the <div className="heroSectionContainerInfoBlue">quiet
                            climb. </div></h1>
                        <div className="heroSectionContainerInfoText">Mindful is a steady path toward better habits. No racing, just
                            consistent progress across the misty peaks of your daily life.</div>
                        <div className="heroSectionContainerInfoButtons">
                            <button 
                                className="heroButton startButton"
                                onClick={() => document.getElementById('auth-section')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Start Climbing
                            </button>
                            <button className="heroButton viewButton">View The Map</button></div> </div>

                    <div className="heroSectionContainerExample">
                        <div className="heroCard heroCard1"></div>
                        <div className="heroCard heroCard2"></div>
                    </div>

                    </div>
                </div>
                <div className="authSection" id="auth-section">
                    <div className="authSectionContainer">
                        <div className="authSectionContainerInfo">
                            <div className="authSectionContainerInfoHeader">Join the basecamp.</div>
                            <div className="authSectionContainerInfoText">Every great ascent starts with a single step. Join thousands of climbers
                                who prioritize peace over productivity.</div>
                            <div className="authSectionContainerInfoBlock">
                                <div className="authSectionCard authSectionContainerInfoBlockSummit">
                                    <div className="authSectionCardIcon authSectionContainerInfoBlockSummitIcon">
                                        <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 15L7.5 5L13.125 12.5H22.5L16.25 4.1875L13.125 8.3125L11.5625 6.25L16.25 0L27.5 15H0ZM5 12.5H10L7.5 9.15625L5 12.5ZM5 12.5H7.5H10H5Z" fill="#3C5F7D"/>
                                        </svg>

                                    </div>
                                    <div className="authSectionContainerInfoBlockSummitText">
                                        <div className="authSectionCardHeader authSectionContainerInfoBlockSummitTextHeader">Summit Visuals</div>
                                        <div className="authSectionCardText authSectionContainerInfoBlockSummitTextDescription">Watch your progress grow like a mountain range.</div>
                                    </div>

                                </div>
                                <div className="authSectionCard authSectionContainerInfoBlockEvening">
                                    <div className="authSectionCardIcon authSectionContainerInfoBlockEveningIcon">

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.1 20C8.7 20 7.3875 19.7333 6.1625 19.2C4.9375 18.6667 3.87083 17.9458 2.9625 17.0375C2.05417 16.1292 1.33333 15.0625 0.8 13.8375C0.266667 12.6125 0 11.3 0 9.9C0 7.46667 0.775 5.32083 2.325 3.4625C3.875 1.60417 5.85 0.45 8.25 0C7.95 1.65 8.04167 3.2625 8.525 4.8375C9.00833 6.4125 9.84167 7.79167 11.025 8.975C12.2083 10.1583 13.5875 10.9917 15.1625 11.475C16.7375 11.9583 18.35 12.05 20 11.75C19.5667 14.15 18.4167 16.125 16.55 17.675C14.6833 19.225 12.5333 20 10.1 20ZM10.1 18C11.5667 18 12.925 17.6333 14.175 16.9C15.425 16.1667 16.4083 15.1583 17.125 13.875C15.6917 13.7417 14.3333 13.3792 13.05 12.7875C11.7667 12.1958 10.6167 11.3917 9.6 10.375C8.58333 9.35833 7.775 8.20833 7.175 6.925C6.575 5.64167 6.21667 4.28333 6.1 2.85C4.81667 3.56667 3.8125 4.55417 3.0875 5.8125C2.3625 7.07083 2 8.43333 2 9.9C2 12.15 2.7875 14.0625 4.3625 15.6375C5.9375 17.2125 7.85 18 10.1 18Z" fill="#3C5F7D"/>
                                        </svg>

                                    </div>
                                    <div className="authSectionContainerInfoBlockEveningText">
                                        <div className="authSectionCardHeader authSectionContainerInfoBlockTextEveningHeader">Evening Review</div>
                                        <div className="authSectionCardText authSectionContainerInfoBlockTextEveningDescription">A gentle prompt to reflect on the day's milestones.</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <AuthForm />
                    </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

