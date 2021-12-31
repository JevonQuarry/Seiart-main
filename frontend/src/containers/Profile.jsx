import React, { useRef, useState } from 'react';
import userImg from '../assets/icons/User.png';

import { updateProfile } from '../reducks/users/operations';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../reducks/posts/selectors';
import { getUsers } from '../reducks/users/selectors';
function Profile() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUsers(selector);
    const userValues = { name: user.user_name };
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

  

    const updateProfileHandler = async () => {
        setIsLoading(true);
        console.log('userId', user.id);
        await dispatch(updateProfile({ ...values, profile: image }, user.id));
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
                
                    <button onClick={updateProfileHandler} type="button" className="custom-btn">
                        Done
                    </button>
                </form>

                
            </div>
           
        </>
    );
}

export default Profile;
