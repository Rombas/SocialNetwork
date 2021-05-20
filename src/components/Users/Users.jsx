import React from "react";
import styles from './Users.module.css';
import userPhoto from "../../assets/images/images.png"
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.usersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {
                    pages.map((page) => {
                        return <span key={page} className={page === props.currentPage ? styles.current : null}
                                     onClick={() => {
                                         props.getUsers(props.pageSize, page)
                                     }}>
                                {page}.
                            </span>
                    })
                }
            </div>
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