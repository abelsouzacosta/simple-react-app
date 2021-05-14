import "./styles.css";

export const PostCard = (props) => {
  const { post } = props;

  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
