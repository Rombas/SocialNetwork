import c from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={c.item}>
                { props.message }
            </div>
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
};

export default Post;