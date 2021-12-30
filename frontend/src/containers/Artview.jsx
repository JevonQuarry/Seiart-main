import React from 'react';
import User1 from '../assets/profileimages/user_1.jpeg';
import favIcon from '../assets/icons/Favorite.png';
import Image1 from '../assets/img/image_1.jpg';

function Artview() {
    return (
        <>
            <div class="art-view">
                <div class="art-header">
                    <div class="art-profile">
                        <img class="profile-picture" src={User1} alt="profile picture" />
                    </div>

                    <div class="art-text">
                        <h2 class>Title</h2>
                        <h3>Username</h3>
                    </div>
                </div>
                <div class="art-body">
                    <img class="art" src={Image1} alt="art" />

                    <div class="art-info">
                        <input class="post-favorite" type="image" src={favIcon} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Artview;
