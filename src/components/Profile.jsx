import React from "react";
import s from "./Profile.module.css";

// `${s.item} ${s.activ}`
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div>
      <div>ava+description</div>
      <div>My Posts</div>
      <div>New Posts</div>
      <div className="posts">
        <div className={`${s.item} ${s.activ}`}>Post1</div>
        <div className={s.item}>Post2</div>
      </div>
    </div>
  );
};
export default Profile;
