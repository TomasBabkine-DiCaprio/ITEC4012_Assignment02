import "./styles.css";

// Icons needed for the comment section of posts
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

// Components
import { ProfilePicture } from "../Profile-picture";

export const Post = (props) => {

    const { id, user, profile_picture, photo, description, likes, comment_username, comment } = props;

    return (
        <div className="individualPost">
            <div className="user">
                <ProfilePicture source={ profile_picture } type="profile_picture posts"></ProfilePicture>
                <h1>{user}</h1>
            </div>
            <div className="picture">
                <img src={photo}></img>
            </div>
            <div className="commentSection">
                <div className="iconRow">
                    <AiOutlineHeart size="1.6em"/>
                    <FaRegComment size="1.6em"/>
                    <FiSend size="1.6em"/>
                </div>
                <div className="likesRow">
                    <h2>{likes} likes</h2>
                </div>
                <div className="descriptionRow">
                    <h2>{user}</h2>
                    <h3>{description}</h3>
                </div>
                <div className="commentRow">
                    <h2>{comment_username}</h2>
                    <h3>{comment}</h3>
                </div>
            </div>
        </div>
    )
}