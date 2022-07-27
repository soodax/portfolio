import './Header.scss';

const Header = (props) => {
    return (
        <header className='header'>
            <div className='container'>
                <div className="header__row">
                    <div className='header__logo'>
                        {'{react-portfolio}'}
                    </div>
                    <nav className='header__nav'>
                        <ul>
                            <li> <a href='#informationSection'>About me</a> </li>
                            <li> <a href='#projectsSection'>Projects</a> </li>
                            <li> <a href='#footerSection'>Contacts</a> </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;