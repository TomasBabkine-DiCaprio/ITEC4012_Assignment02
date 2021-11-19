import './styles.css';

// import the user's posts from the "database"
import data from "../../databases/account-owner-posts.json";

// icons
import { BsGrid3X3, BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg"


export const UserPosts = () => {

    return (
        <div className="userPostsContainer">
            <div className="postsButtons">
                <BsGrid3X3 size="0.8em"></BsGrid3X3>
                <h3>POSTS</h3>
                <BsBookmark size="0.8em"></BsBookmark>
                <h3>SAVED</h3>
                <CgProfile size="0.8em"></CgProfile>
                <h3>TAGGED</h3>
            </div>
            <div className="userPosts">
                {
                    data.map( (post) => (
                        <img src={post.source} key={post.id}></img>
                    ) )
                }
            </div>
        </div>
    )
}