import { NavLink } from "react-router-dom";

// Icons
import { TiHome, } from "react-icons/ti";
import { VscHome } from "react-icons/vsc";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { ImCompass2 } from "react-icons/im";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";

// Styling
import "./styles.css";

// Images
const logo = 'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="searchBar">
                <input type="text" fname="search" placeholder={<AiOutlineSearch size="1.6em" /> + " search"}></input>
            </div>
            <div className="navIcons">
                <VscHome size="1.6em"/>
                <RiMessengerLine size="1.6em" />
                <BsPlusSquare size="1.6em" />
                <ImCompass2 size="1.6em" />
                <AiOutlineHeart size="1.6em" />
            </div>
        </nav>
    );
}