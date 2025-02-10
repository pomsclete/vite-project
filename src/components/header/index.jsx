
import "./header.css"
import LOGO from "../../assets/images/logo.jpg"
function Header () {
    return (
        <header>
            <img src={LOGO} alt="logo" />
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">A Propos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;