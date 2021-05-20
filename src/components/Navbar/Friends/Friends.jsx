import React from "react";
import s from './Friends.module.css';
import FriendInNavbar from "./FriendInNavbar/FriendInNavbar";

const Friends = (props) => {
    const friends = props.state.map(item => <FriendInNavbar name={item.name} avatar={item.avatar}/>);
    return (
        <div>
            <h2>Friends</h2>
            <div className={s.friendsBar}>
                {friends}
            </div>
        </div>
    )
}

export default Friends;