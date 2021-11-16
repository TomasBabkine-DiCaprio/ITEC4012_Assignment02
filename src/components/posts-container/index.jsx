import "./styles.css";

// Components
import { Post } from "../post";

// Import post data from "database"
import postData from "./../../databases/posts.json";

export const PostsContainer = () => {

    const posts = postData;
    posts.map( (post) => {
        console.log(post.id);
    } );

    return (
        <div className="postsContainer">
            {
                posts.map( (post) => (
                    <Post key={post.id} user={post.user} profile_picture={post.profile_picture} photo={post.photo} description={post.description} likes={post.likes}></Post>
                ))
            }
        </div>
    )
    
}