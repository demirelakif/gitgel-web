import "./Footer.css";
import { SocialIcon } from 'react-social-icons'

export default function Navbar() {
    return (
        <div className="footer-container">
            <div className="socials">
                <SocialIcon url="https://twitter.com/demirelakif" style={{marginRight:32}}/>
                <SocialIcon url="https://linkedin.com/in/akif-demirel" />
            </div>
            <p>&copy; Copyright BlokSoft. All rights reserved</p>
        </div>
    );
}