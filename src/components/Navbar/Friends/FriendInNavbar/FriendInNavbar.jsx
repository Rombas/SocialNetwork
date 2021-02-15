import React from "react";
import s from './../Friends.module.css'

const FriendInNavbar = (props) => {
    return (
        <span>
            <img className={s.avatar} src={props.avatar} />
            <span>{props.name}</span>
        </span>
    )
}

export default FriendInNavbar;