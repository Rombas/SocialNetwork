import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios'
import userPhoto from "../../assets/images/images.png"

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) =>
            this.props.setUsers(response.data.items));
    }

    render() {
        return (
            <div>
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