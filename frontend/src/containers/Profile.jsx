import React, { useRef, useState } from 'react';
import userImg from '../assets/icons/User.png';
import addImg from '../assets/icons/Add.png';
import image from '../assets/img/image_9.jpg';
import { updateProfile } from '../reducks/users/operations';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../reducks/posts/selectors';
import { getUsers } from '../reducks/users/selectors';
function Profile() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUsers(selector);
    const userValues = { id: user.id, name: user.user_name, email: user.email, profile: user.profile };
    const [values, setValues] = useState(userValues);
    const [image, setImage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [previewImage, setPreviewImage] = useState(null);

    const inputFile = useRef(null);
    const onButtonClick = () => {
        console.log(inputFile);
        inputFile.current.click();
    };

    const inputImage = event => {
        const file = event.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setPreviewImage(objectUrl);
        setImage(file);
        setValues({ ...values, profile: null });
    };

    const handleInputChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const updateProfileHandler = async () => {
        setIsLoading(true);
        await dispatch(updateProfile({ ...values, profile: image }, values.id));
        setIsLoading(false);
    };

    return (
        <>
            <div className="myprofile">
                <form className="form-container">
                    <input type="file" style={{ display: 'none' }} ref={inputFile} onChange={inputImage} />
                    <img
                        onClick={() => onButtonClick()}
                        name="image"
                        src={previewImage ? previewImage : values.profile ? values.profile : userImg}
                        className={`upload-area`}
                        alt="Upload"
                    />
                    <div className="upload-text">{`${isLoading ? 'Updating Profile...' : 'Edit Profile'}`}</div>
                    <label className="profile-input-label" htmlFor="name">
                        Name
                    </label>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        value={values.name}
                        name="name"
                        className="profile-input"
                        placeholder="Type your name"
                    />
                    <label className="profile-input-label" htmlFor="name">
                        Mail Address
                    </label>
                    <input
                        onChange={handleInputChange}
                        type="email"
                        value={values.email}
                        name="email"
                        className="profile-input"
                        placeholder="Type your mail address"
                    />
                    <button onClick={updateProfileHandler} type="button" className="custom-btn">
                        Done
                    </button>
                </form>

                <h1 className="myprofile-name">UserName</h1>
            </div>
            <div className="feed">
                <div className="new-post">
                    <input className="newpost-icon" type="file" src={addImg} />
                </div>
                <div className="myart-body">
                    <img className="myart-picture" src={image} alt="" />
                </div>
            </div>
        </>
    );
}

export default Profile;
