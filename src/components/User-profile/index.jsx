import "./styles.css";

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
                <ProfilePicture source={ data.profile_picture } type="profile_picture homepageProfile"></ProfilePicture>
                <div className="userName">
                    <h2>{data.handle}</h2>
                    <h2 className="grey">{data.first_name + " " + data.last_name}</h2>
                </div>
            </div>
        )
    }
}