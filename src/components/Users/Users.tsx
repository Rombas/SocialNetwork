import React from "react";
import styles from './Users.module.css';
import userPhoto from "../../assets/images/images.png"
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import { UsersType } from "../../type/types";

type PropsType = {
    usersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UsersType>
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    getUsers: (pageSize: number) => void,
    toggleIsFollowing: (isFollowing: boolean, userID: number) => void,
    followingToggleList: Array<number>,
    isAuth: boolean,
    portionSize: number
}

let Users: React.FC<PropsType> = (props) => {
    let pagesCount = Math.ceil(props.usersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       getUsers={props.getUsers}
                       itemsCount={props.usersCount}
                       pageSize={props.pageSize}
                       portionSize={props.portionSize}/>
            {
                props.users.map((user) => {
                    return <div key={user.id}>
                        <span>
                            <NavLink to={'profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={styles.photo} alt={'avatar'}/>
                            </NavLink>
                            {(user.followed) ?
                                <button disabled={props.followingToggleList.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id);
                                }}> Unfollow </button> :
                                <button disabled={props.followingToggleList.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id)
                                }}> Follow </button>}
                                </span>
                        <span>
                                <span>
                                <div>
                                {user.name}
                                </div>
                                <div>
                                {user.status}
                                </div>
                                </span>
                                <span>
                                <div>
                                {"user.location.city"}
                                </div>
                                <div>
                                {"user.location.country"}
                                </div>
                                </span>
                                </span>
                    </div>

                })
            }
        </div>
    )
}

export default Users;