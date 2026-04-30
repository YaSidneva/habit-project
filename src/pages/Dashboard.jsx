import './Dachboard.css'

import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function Dashboard() {

    const user = JSON.parse(localStorage.getItem('telegram_user'))

    return (
        <div className="mainSection">
            <Header />
            <main>
                <Sidebar /> </main>
        </div>
    )
}