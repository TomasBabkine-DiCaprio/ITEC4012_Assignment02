import "./styles.css";

export const Hyperlink = (props) => {

    const { text, type } = props;

    return (
        <a className={type}>{text}</a>
    )
}