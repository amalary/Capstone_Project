import React from "react";

import { Link } from "react-router-dom";

function PostCard(props) {
  return (
    <Link to={`/Post/${props.data._id}`}>
      <div className='Post-card'>
        <img src={props.data.coverArtUrl} alt={props.data.title} />
      </div>
    </Link>
  );
}

export default PostCard;