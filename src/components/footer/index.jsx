import "./footer.css"
import LOGO from "../../assets/images/logo.jpg"
function Footer () {
    return (
        <footer>
            <img src={LOGO} alt="Logo du site meilleurs promoteurs" />
            <p>&copy; 2025 Meilleurs promoteurs. All rights reserved.</p>
        </footer>
    );
}

export default Footer;