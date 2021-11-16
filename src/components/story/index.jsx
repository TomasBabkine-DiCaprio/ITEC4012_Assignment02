import "./styles.css";

export const Story = (props) => {

    const {id, profilePicture, handle} = props;

    return (
        <li>
            <div className="userStoryInfo">
                <img src={profilePicture}></img>
                <h1>{handle}</h1>
            </div>
        </li>
    )
}