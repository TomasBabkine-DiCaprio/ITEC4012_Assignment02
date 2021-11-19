import "./styles.css";

// Components
import { ProfilePicture } from "../Profile-picture";

// Import user recommendations from "database"
import data from "../../databases/user-recommendations.json";

export const UserRecommendations = () => {

    return (
        <div className="userRecommendationsContainer">
            <h1>Suggestions For You</h1>
            <ul>
                {
                    data.map( (user) => (
                        <div className="userRecommendations">
                            <ProfilePicture source={ user.profile_picture } type="profile_picture recommendation"></ProfilePicture>
                            <h2>{user.handle}</h2>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}