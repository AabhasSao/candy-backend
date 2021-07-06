import axios from 'axios';
import React, { useState } from 'react';
import { postRoutes } from '../routes/routes';

const FileUploader = () => {
  const [image, setImage] = useState(null);
  const handleFileInput = (e) => {
    setImage(e.target.files[0]);
  };

  const fileUploadHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    console.log(formData);
    axios.post(postRoutes.upload, formData, {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.loaded / progressEvent.total);
      },
    });
  };

  return (
    <form className="file-uploader" onSubmit={fileUploadHandler} encType="multipart/form-data">
        <input type='file' onChange={handleFileInput} name='post' />
        <button onClick={fileUploadHandler}>Upload</button>
    </form>);
};

export default FileUploader;
