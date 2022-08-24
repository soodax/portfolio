import './Header.scss';
import menu_icon from '../../assets/images/menu-icon.png';
import close_icon from '../../assets/images/close-icon.png';
import { useState } from 'react';

const Header = (props) => {

    const [isMenuOpen, menuToggle] = useState(false)

    const menuHandler = () => {
        !isMenuOpen ? menuToggle(true) : menuToggle(false);
    }

    return (
        <header className='header'>
         
                <div className="header__row">
                    <div className='header__logo'>
                        {'{react-portfolio}'}
                    </div>
                    <nav className={!isMenuOpen ? 'header__nav menu-close' : 'header__nav menu-open'}>
                        <ul>
                            <li> <a href='#informationSection'>About me</a> </li>
                            <li> <a href='#projectsSection'>Projects</a> </li>
                            <li> <a href='#footerSection'>Contacts</a> </li>
                        </ul>
                    </nav>
                    <button className='menu-btn' onClick={menuHandler}>
                        <img src={!isMenuOpen ? menu_icon : close_icon} alt="" />
                    </button>
                </div>
            
        </header>
    )
}

export default Header;