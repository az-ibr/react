import React from "react";
import MyPosts from "./MyPosts/Post/MyPosts";
import s from "./Profile.module.css";


// `${s.item} ${s.activ}`
const Profile = () => {
  return (

    <div className={s.content}>
      <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div>
      <div>ava+description</div>
      <MyPosts/>
      </div>
      
  );
};
export default Profile;
