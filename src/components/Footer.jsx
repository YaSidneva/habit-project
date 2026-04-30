import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <a href="#" className="footerHeading">Mindful</a>
            <div className="footerText">A STEADY GROWTH ECOSYSTEM</div>
            <div className="footerLinksBlock">
                <a href="#" className="footerLink footerLinkWeb"></a>
                <a href="#" className="footerLink footerLinkCom"></a>
                <a href="#" className="footerLink footerLinkMail"></a>
            </div>
        </footer>
    )
}