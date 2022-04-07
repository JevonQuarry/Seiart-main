import React, { useEffect, useState } from "react";
import homeIcons from "../../assets/icons/Home.png";
import favIcon from "../../assets/icons/MyFavorite.png";
import userIcon from "../../assets/icons/User.png";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { signOut } from "../../reducks/users/operations";
import addpostbutton from "../../assets/icons/Favorite.png";

export default function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("WD_FORUM_LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);

  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch(push("/Signin"));
  };

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  return (
    <header>
      <div class="topnav">
        <h1 class="logo">SieArt</h1>
        <div class="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Search" name="search" />
          </form>
        </div>
        <div class="header-links">
          <p class="sign-in-link">
            {checkUser ? (
              <span class="logout" onClick={signOutButton}>
                Logout
              </span>
            ) : (
              <a href="/Signin" class="sign-in"></a>
            )}
          </p>
        </div>
        <div class="navoption">
          <a href="#">
            {" "}
            <img
              class="navhome"
              src={homeIcons}
              onClick={() => dispatch(push("/"))}
            />
          </a>
          <a href="#">
            <img
              class="navfav"
              src={favIcon}
              onClick={() => dispatch(push("/favorite"))}
            />
          </a>
          <a href="#">
            <img
              class="navuser"
              src={userIcon}
              onClick={() => dispatch(push("/Signup"))}
            />
          </a>
          <a href="#">
            <img
              class="addpostbutton"
              src={addpostbutton}
              onClick={() => dispatch(push("/post"))}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
