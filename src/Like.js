import React, { useState, useEffect } from 'react';
import './Like.css';

function Like(props) {
  const [likes, setLikes] = useState(0);

  function updateLikes(postId, increment) {
    const likesData = JSON.parse(localStorage.getItem('likesData')) || {};
  
    if (likesData[postId] === undefined) {
      likesData[postId] = 0;
    }
  
    likesData[postId] += increment;
  
    localStorage.setItem('likesData', JSON.stringify(likesData));
  }

  useEffect(() => {
    const likesData = JSON.parse(localStorage.getItem('likesData')) || {};

    if (likesData[props.postId] !== undefined) {
      setLikes(likesData[props.postId]);
    }
  }, [props.postId]);

  const incrementLike = () => {
    setLikes(likes + 1);
    updateLikes(props.postId, 1);
  };

  return (
    <span className="likebox">
        <span>{likes}</span>
        <img
            alt=""
            height="25px"
            width="25px"
            className='like'
            src='https://cdn-icons-png.flaticon.com/256/833/833472.png'
            onClick={incrementLike}
        ></img>      
    </span>
  );
}

export default Like;