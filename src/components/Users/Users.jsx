import React from "react";
import styles from './Users.module.css';
import userPhoto from "../../assets/images/images.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                                         props.getUsers(page)
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
                                     className={styles.photo}/>
                            </NavLink>
                            {(user.followed) ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {"API-KEY": '4be8dcbe-a96b-47b2-adc7-fdd7ab65d62a'}
                                        }).then((response) => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(user.id);
                                        }
                                    });
                                }}> Unfollow </button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {"API-KEY": '4be8dcbe-a96b-47b2-adc7-fdd7ab65d62a'}
                                        }).then((response) => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(user.id)
                                        }
                                    });
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