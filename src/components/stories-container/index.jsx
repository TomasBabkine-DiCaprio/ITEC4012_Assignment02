import "./styles.css";
import { useEffect, useState } from 'react';

// Components
import { Story } from "../story";

// Import data from "database"
import userData from "./../../databases/users.json"

export const StoriesContainer = () => {

    // Users state
    const [users, setUsers] = useState([]);

    useEffect(
      () => {
        getUsers();
      }, []
    );

    const getUsers = () => {
        setUsers(userData);
    }

    users.map( (user) => {
        console.log(user.profile_picture);
    })

    return (
        <div className="storiesContainer">
            <ul>
                {
                    users.map( (user) => (
                        <Story id={user.id} profilePicture={user.profile_picture} handle={user.handle}></Story>
                    ))
                }
            </ul>
        </div>
    );

}