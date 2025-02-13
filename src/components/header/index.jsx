
import "./header.css"
import LOGO from "../../assets/images/logo.jpg"
function Header () {
    return (
        <header>
            <img src={LOGO} alt="logo" />
            <nav>
                <ul>
                    <li className="active">Accueil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;