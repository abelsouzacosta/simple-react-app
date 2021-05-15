import React from 'react';
import './styles.css';

import P from 'prop-types';

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

PostCard.propTypes = {
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
  id: P.number.isRequired,
};
