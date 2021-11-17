import "./styles.css";

// Components
import { ProfilePicture } from "../profile-picture";

export const Story = (props) => {

    const {id, profilePicture, handle} = props;

    return (
        <li>
            <div className="userStoryInfo">
                <ProfilePicture source={ profilePicture } type="profile_picture stories"></ProfilePicture>
                <h1>{handle}</h1>
            </div>
        </li>
    )
}