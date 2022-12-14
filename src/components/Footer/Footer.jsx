import "./Footer.scss";
import gh_icon from "../../assets/images/gh-icon.png";
import phone_icon from "../../assets/images/phone-icon.jpg";
import email_icon from "../../assets/images/email-icon.png";

const Footer = (props) => {
    return (
        <footer id="footerSection" className="footer">
            <div className="container">
                <div className="footer__row">
                    <h2 className="title">Contacts</h2>
                    <ul className="footer__list">
                        <li>
                            <img src={gh_icon} alt="" />
                            <a href="https://github.com/soodax" target='_blank' rel='noreferrer'>Github link</a>
                        </li>
                        <li>
                            <img src={email_icon} alt="" />
                            <a href="mailto:mirakov.david@mail.ru">
                                mirakov.david@mail.ru
                            </a>
                        </li>
                        <li>
                            <img src={phone_icon} alt="" />
                            <a href="tel:+79260807469">
                                +79260807469
                            </a>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
