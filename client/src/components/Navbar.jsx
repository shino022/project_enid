import { useState } from 'react';
import '../styles/Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleContactClick = (e) => {
        e.preventDefault();
        document.getElementById('footer_target').scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    }

    const handleMenuClick = (e) => {
        e.preventDefault();
        document.getElementById('main_body').scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    }

    return (
        <header className="navbar">
            <h1 className="logo">Seven Woks 高朋</h1>
            <div className="menu_no_hamburger">
                <a href="#" onClick={handleMenuClick}>MENU</a>
                <a href="#" onClick={handleContactClick}>CONTACT</a>
            </div>
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
                    <a href="#" onClick={handleMenuClick}>MENU</a>
                    <a href="#" onClick={handleContactClick}>CONTACT</a>                    
                </div>
            )}
        </header>
    )
}

export default Navbar;