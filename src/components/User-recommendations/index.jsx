import "./styles.css";

// Components
import { ProfilePicture } from "../Profile-picture";
import { Hyperlink } from "../Hyperlink";

// Import user recommendations from "database"
import data from "../../databases/user-recommendations.json";

export const UserRecommendations = () => {

    return (
        <div className="userRecommendationsContainer">
            <div className="suggestionsForYou">
                <h1>Suggestions For You</h1>
                <Hyperlink type="seeAll" text="See All" />
            </div>
            
            <ul>
                {
                    data.map( (user) => (
                        <div className="userRecommendations">
                            <ProfilePicture source={ user.profile_picture } type="profile_picture recommendation"></ProfilePicture>
                            <h2>{user.handle}</h2>
                            <Hyperlink type="follow" text="Follow" />
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}