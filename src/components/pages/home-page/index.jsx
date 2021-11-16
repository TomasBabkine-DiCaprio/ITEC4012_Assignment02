import "./styles.css";

// Components
import { StoriesContainer } from "../../stories-container";
import { PostsContainer } from "../../posts-container";

export const HomePage = () => {
    
    return (
        <div>
            <StoriesContainer></StoriesContainer>
            <PostsContainer></PostsContainer>
        </div>
       
    )
}