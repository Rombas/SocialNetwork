import c from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <Post message='Hi, how are you?' likeCount='15'/>
            <Post message='It is my first post' likeCount='20' />
        </div>
    )
};

export default MyPosts;