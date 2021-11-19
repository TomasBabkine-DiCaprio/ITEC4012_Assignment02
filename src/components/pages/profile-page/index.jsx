import "./styles.css";

// Components
import { UserProfile } from "../../User-profile";
import { UserPosts } from "../../User-posts";

export const ProfilePage = () => {

    return (
        <div>
            <UserProfile page="profilepage"></UserProfile>
            <UserPosts></UserPosts>
        </div>
    )
}