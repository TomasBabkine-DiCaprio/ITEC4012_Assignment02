import "./styles.css";
import { useEffect, useState } from 'react';

// Components
import { Story } from "../story";

// Import data from "database"
import userData from "./../../databases/users.json"

export const StoriesContainer = () => {

    // Users state
    const [users, setUsers] = useState([]);

    // Get all of the users, for the sake of simplicity, we're going to assume that all users have posted a story recently
    useEffect(
      () => {
        getUsers();
      }, []
    );

    const getUsers = () => {
        setUsers(userData);
    }

    return (
        <div className="storiesContainer">
            <ul>
                {
                    users.map( (user) => (
                        <Story key={user.id} profilePicture={user.profile_picture} handle={user.handle}></Story>
                    ))
                }
            </ul>
        </div>
    );

}