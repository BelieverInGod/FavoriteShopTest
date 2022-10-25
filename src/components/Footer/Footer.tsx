import './Footer.css';
import logo from '../../assets/image/ShopBlack.png'

function Footer() {
    return (
        <footer className="Footer">
            <img src={logo} alt="logo" className='logo'/>
        </footer>
    );
}

export default Footer;