import { useState } from "react";
import NavIcon from "../assets/navicon.png";
import "./NavBar.css"

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header>
            <img className="nav-icon" src={NavIcon} onClick={toggleMenu} alt="Logo" />
            {isMenuOpen && (
                <nav className="menu">
                    <ul className="menu-container">
                        <li className="menu-item"><a href="/booking">Booking</a></li>
                        <li className="menu-item"><a href="/confirmation">Confirmation</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default NavBar;