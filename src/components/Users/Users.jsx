import React from "react";
import styles from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [{
                id: 1,
                photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
                fullName: 'Roman B',
                status: 'Hey you',
                isFollowed: true,
                location: {city: 'Bobruisk', country: 'Belarus'}
            },
                {
                    id: 2,
                    photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
                    fullName: 'Dimych D',
                    status: 'Boss',
                    isFollowed: false,
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
                    fullName: 'Piotr B',
                    status: 'BIG Boss',
                    isFollowed: true,
                    location: {city: 'All over the World', country: 'Belarus'}
                }]
        )
    }
    return (
        <div>
            {
                props.users.map((user) => {
                    return <div key={user.id}>
                        <span>
                            <img src={user.photoUrl} className={styles.photo}/>
                            {(user.isFollowed) ? <button onClick={() => props.unfollow(user.id)}> Unfollow </button> :
                                <button onClick={() => props.follow(user.id)}> Follow </button>}
                        </span>
                        <span>
                            <span>
                                <div>
                                    {user.fullName}
                                </div>
                                <div>
                                    {user.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {user.location.city}
                                </div>
                                <div>
                                    {user.location.country}
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