import "./styles.css";

// Components
import { Post } from "../Post";

// Import post data from "database"
import postData from "../../databases/posts.json";

export const PostsContainer = () => {

    const posts = postData;

    return (
        <div className="postsContainer">
            {
                posts.map( (post) => (
                    <Post key={post.id} user={post.user} profile_picture={post.profile_picture} photo={post.photo} description={post.description} likes={post.likes} comment_username={post.comment_username} comment={post.comment} ></Post>
                ))
            }
        </div>
    )
    
}