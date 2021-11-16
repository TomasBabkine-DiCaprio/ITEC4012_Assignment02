import "./styles.css";

export const Post = (props) => {

    const { id, user, profile_picture, photo, description, likes } = props;

    return (
        <div className="individualPost">
            <div className="user"></div>
            <div className="picture"></div>
            <div className="commentSection"></div>
        </div>
    )
}