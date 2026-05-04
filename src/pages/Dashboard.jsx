import './Dachboard.css'

import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import DashboardMainContainer from "../components/DashboardMainContainer.jsx";
import Footer from "../components/Footer.jsx";

export default function Dashboard() {

    const user = JSON.parse(localStorage.getItem('telegram_user'))

    return (
        <div className="mainSection">
            <Header />
            <main>
                <Sidebar />
                <DashboardMainContainer/>
            </main>
            <Footer/>
        </div>
    )
}