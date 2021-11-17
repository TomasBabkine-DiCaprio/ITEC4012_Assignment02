import "./styles.css";

export const ProfilePicture = (props) => {

    const { source, type } = props;

    return (
        <img src={ source } className={ type }></img>
    )
}