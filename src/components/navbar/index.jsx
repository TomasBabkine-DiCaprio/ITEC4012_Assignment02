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

// Components
import { ProfilePicture } from "../profile-picture"

// Images
const logo = 'https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png';
const userProfilePicture = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg/1200px-Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg";

export const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/"><img src={logo} /></NavLink>
            </div>
            <div className="searchBar">
                <input type="text" fname="search" placeholder={<AiOutlineSearch size="1.6em" /> + " search"}></input>
            </div>
            <div className="navIcons">
                <NavLink to="/"><VscHome size="1.6em"/></NavLink>
                <RiMessengerLine size="1.6em" />
                <BsPlusSquare size="1.6em" />
                <ImCompass2 size="1.6em" />
                <AiOutlineHeart size="1.6em" />
                <NavLink to="/profile"><ProfilePicture source={userProfilePicture} type="profile_picture navPicture"></ProfilePicture></NavLink>
            </div>
        </nav>
    );
}