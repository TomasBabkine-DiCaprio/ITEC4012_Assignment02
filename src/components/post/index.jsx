import "./styles.css";

// Icons needed for the comment section of posts
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export const Post = (props) => {

    const { id, user, profile_picture, photo, description, likes } = props;

    return (
        <div className="individualPost">
            <div className="user">
                <img src={profile_picture}></img>
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
            </div>
        </div>
    )
}