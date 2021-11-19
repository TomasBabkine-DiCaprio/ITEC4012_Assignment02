import "./styles.css";

import { NavLink } from "react-router-dom";

// Components import
import { ProfilePicture } from "../Profile-picture";

// Import data pertaining to the owner of the account from "database"
import data from "../../databases/account-owner.json";

export const UserProfile = (props) => {

    // We're using this component both on the homepage as well as the profile page. We're going to pass a prop "page" to know where this will be displayed and make sure that it is rendered properly
    const { page } = props;

    // If this component is to be displayed on the homepage
    if (page === "homepage") {
        return (
            <div className="userProfile">
                <NavLink to="/profile"><ProfilePicture source={ data.profile_picture } type="profile_picture homepageProfile"></ProfilePicture></NavLink>
                <div className="userName">
                    <NavLink to="/profile"><h2>{data.handle}</h2></NavLink>
                    <h2 className="grey">{data.first_name + " " + data.last_name}</h2>
                </div>
            </div>
        )
    }

    // If this component is to be displayed on the profile page
    if (page === "profilepage") {
        return (
            <div className="userProfilePage">
                <div className="profilePicture">
                    <ProfilePicture source={ data.profile_picture } type="profile_picture profilePage"></ProfilePicture>
                </div>
                <div className="profileInfo">
                    <div className="handle">
                        <h2>{data.handle}</h2>
                    </div>
                    <div className="followers">
                        <h3>{data.numPosts}</h3>
                        <h3>{data.numFollowers}</h3>
                        <h3>{data.numFollowing}</h3>
                    </div>
                    <div className="name">
                        <h4>{data.first_name + " " + data.last_name}</h4>
                        <h4 className="quote">{data.quote}</h4>
                    </div>
                </div>
            </div>
        )
    }
}