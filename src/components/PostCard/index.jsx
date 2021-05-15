import "./styles.css";

export const PostCard = ({ title, body, cover, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h3>
        {title} {id}
      </h3>
      <p>{body}</p>
    </div>
  </div>
);
