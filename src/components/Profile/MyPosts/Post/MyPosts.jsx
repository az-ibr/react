import React from "react";
import s from './MyPosts.module.css';



// `${s.item} ${s.activ}`
const MyPosts = () => {
  return ( <div>
      <div>My Posts</div>
      <div>New Posts</div>
      <div className="posts">
        <div className={`${s.item} ${s.activ}`}>Post1</div>
        <div className={s.item}>Post2</div>
      </div>
      </div>
  );
};
export default MyPosts;
