import React, { useEffect, useState } from "react";
import Post from "./Post";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { addPost } from "../reducks/posts/operations";
import { LOGIN_USER_KEY } from "../API";

function Addpost() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem(LOGIN_USER_KEY));

  const [name, setName] = useState("");
  const [image, setimage] = useState([]);
  const [imgName, setimgName] = useState("");

  const inputName = (e) => {
    setName(e.target.value);
  };

  const inputImage = (e) => {
    setimage(e.target.files[0]);
    console.log("qqqqqqqqqq", e.target.files[0]);
  };

  const inputImgName = (e) => {
    setimgName(e.target.value);
  };

  const post = (e) => {
    // let params = {
    //     image: image,
    //     imgName: imgName
    // };
    console.log("dddddddddddddddddddddd", image);
    dispatch(addPost(imgName, image));
    e.preventDefault();
    console.log();
    dispatch(push({ pathname: "/" }));
  };

  return (
    <>
      <Post />
      <section class="popup">
        <div class="user-page">
          <div class="user-info">
            <div class="user-input">
              <label Name />
              <br />
              <input type="text" value={user.user_name} />
              <label Body />
              <br />
              <input type="text" onChange={inputImgName} />
              <label Image />
              <input type="file" name="image" onChange={inputImage} />
              <input type="submit" value="Post" onClick={post} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Addpost;
