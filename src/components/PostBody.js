import './Posts.css';

const PostBody = (props) => {
    return (
        <div className="postBody">
            <p>{props.body}</p>
        </div>
    )
}

export default PostBody;