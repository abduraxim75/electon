import { Button } from "../../utils/button"
import logo from "../../assets/logo.png"
import { Person, Liked, Shopping } from "../../utils/svg"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <div className="nav-input-container">
                    <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                    </Link>
                    <input className="nav-input" type="text" placeholder="search anything" />
                    <Button type="button" className="btn" btnsize="btn--small" >Search</Button>
                </div>
                <div>
                    <ul className="ul-list">
                        <li className="ul_li__list">

                            <Person />
                            <Link className="navlogin" to="/createnew">
                                <p>
                                    Sign Up
                                </p>
                            </Link>
                        </li>
                        <li className="ul_li__list">
                            <Liked />
                            <p>
                                Likes
                            </p>
                        </li>
                        <li className="ul_li__list">
                            <Shopping />
                            <Link to="/card">
                            <p>
                                Card
                            </p>
                            </Link>

                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar