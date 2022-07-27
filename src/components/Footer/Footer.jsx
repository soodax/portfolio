import './Footer.scss';

const Footer = (props) => {
    return (
        <footer id='footerSection' className='footer'>
            <div className='container'>
                <div className="footer__row">
                    <h2 className='title'>Contacts</h2>
                    <ul className='footer__list'>
                        <li><a href="#">Github link</a></li>
                        <li><a href="#">mirakov.david@mail.ru</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;