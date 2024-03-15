import { useState } from 'react';
import '../styles/Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleContactClick = () => {
        document.getElementById('footer_target').scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <header className="navbar">
            <h1 className="logo">Sevenwoks</h1>
            <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={(e) => {
                console.log('Toggling menu:', isMenuOpen);
                setIsMenuOpen(!isMenuOpen);
                e.preventDefault();
            }}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            {isMenuOpen && (
                <div className="menu">
                    <a href="#" onClick={handleContactClick}>CONTACT</a>
                    <a href="">MENU</a>
                </div>
            )}
        </header>
    )
}

export default Navbar;