import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios'
import userPhoto from "../../assets/images/images.png"

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setUsersCount(response.data.totalCount);
        });
    }

    getUsers = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then((response) =>
            this.props.setUsers(response.data.items));
    }

    render() {
        let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {
                        pages.map((page) => {
                            return <span key={page} className={page === this.props.currentPage ? styles.current : null}
                                         onClick={() => {
                                             this.getUsers(page)
                                         }}>
                                {page}.
                            </span>
                        })
                    }
                </div>
                {
                    this.props.users.map((user) => {
                        return <div key={user.id}>
                        <span>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={styles.photo}/>
                            {(user.isFollowed) ?
                                <button onClick={() => this.props.unfollow(user.id)}> Unfollow </button> :
                                <button onClick={() => this.props.follow(user.id)}> Follow </button>}
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
}

export default Users;