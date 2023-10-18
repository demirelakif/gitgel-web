import "./Navbar.css";
import logo from "../images/taksiImg.png";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <picture>
                <img src={logo} width={64} alt="logo" />
            </picture>
        </div>
    );
}