const Post = ({ title, body, name, id, deletePost}) => {
    return (
        <>
            <h1>{title}</h1>
            <br/>
            <h3>By: { name }</h3>
            <p>{body}</p>
            <br/>
            <button onClick={() => deletePost(id)}>
                Delete
            </button>

        </>
    )
}

export default Post;