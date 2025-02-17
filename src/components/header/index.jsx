
import { Link } from "react-router";
import "./header.css"
import LOGO from "../../assets/images/logo.jpg"
function Header () {
    return (
        <header>
            <img src={LOGO} alt="logo" />
            <nav>

                <ul>
                    <li className="active">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/a-propos">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;