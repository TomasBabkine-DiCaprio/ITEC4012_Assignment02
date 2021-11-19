import "./styles.css";

// Components
import { StoriesContainer } from "../../Stories-container";
import { PostsContainer } from "../../Posts-container";
import { UserProfile } from "../../User-profile";
import { UserRecommendations } from "../../User-recommendations";

export const HomePage = () => {
    
    return (
        <div>
            <div className="storiesAndProfile">
                <StoriesContainer></StoriesContainer>
                <UserProfile page="homepage"></UserProfile>
            </div>
            <div className="storiesAndProfile">
                <PostsContainer></PostsContainer>
                <UserRecommendations></UserRecommendations>
            </div>
            
        </div>
       
    )
}