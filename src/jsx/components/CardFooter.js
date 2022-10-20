import React, { useState, useEffect } from 'react';

import tree from '../../Images/tree.jpg';

const CardFooter = () => {
  const [avatarPreview, setAvatarPreview] = useState(tree);
  const [data, setData] = useState({});

  const inputHandler = e => {
    e.preventDefault();
    if (e.target.name === 'avatar') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const deleteImage = () => {
    setAvatarPreview();
    setData({ ...data, avatar: null });
  };

  return (
    <div>
      {avatarPreview && (
        <div className='image-preview-section'>
          <span onClick={deleteImage}>
            <i className='bi bi-x'></i>
          </span>
          <img src={avatarPreview} className='image-preview' alt='image' />
        </div>
      )}
      <hr />
      <div className='d-flex justify-content-between'>
        <div className='d-flex'>
          <input
            type='file'
            name='avatar'
            className='custom-file-input'
            id='customFile'
            accept='image/*'
            onChange={inputHandler}
            multiple={false}
          />
          <label for='customFile' className='custom-font-label'>
            <i className='bi bi-image'></i>
          </label>
          <label className='custom-font-label mx-2'>
            <i className='bi bi-emoji-smile'></i>
          </label>
        </div>
        <button className='send-btn'>
          Send Post <i className='bi bi-send'></i>
        </button>
      </div>
    </div>
  );
};

export default CardFooter;
