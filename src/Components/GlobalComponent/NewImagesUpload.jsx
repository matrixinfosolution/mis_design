import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IconButton, ImageList, ImageListItem } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './NewImagesUpload.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handlePreviewFiles, handleUploadFiles } from '../../API/Reducer/fileReducer';

const NewImagesUpload = ({ photos,setPhotos,multipleUpload = true }) => {
  const dispatch = useDispatch();
  const { files, previewFiles } = useSelector((state) => state.file);  
  const { control, handleSubmit } = useForm();
  

  const onSubmit = (data) => {
    // Handle form submission
  };

  const handleImageChange = (event) => {
    const newFiles = Array.from(event.target.files);
    const newImageUrls = newFiles.map(file => URL.createObjectURL(file));

    if (multipleUpload) {
      // Append to existing images when multipleUpload is true
      const prevImages = [...previewFiles, ...newImageUrls];
      const orgFiles = [...files, ...newFiles];
      dispatch(handlePreviewFiles(prevImages));
      setPhotos(orgFiles)
      // dispatch(handleUploadFiles(orgFiles));
    } else {
      // Replace the images when multipleUpload is false
      dispatch(handlePreviewFiles(newImageUrls));
      // const fileMetadata = newFiles.map(file => ({ name: file.name, size: file.size }));
      // dispatch(handleUploadFiles(newFiles));
      setPhotos(newFiles)
    }
  };
  const triggerFileUpload = () => {
    window.ReactNativeWebView.postMessage(JSON.stringify({ action: 'uploadFile' }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="images"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <input
              type="file"
              multiple={multipleUpload}
              accept="image/*"
              className={styles.fileInput}
              id="fileInput"
              name="files[]"
              onChange={(e) => {
                handleImageChange(e);
                field.onChange(e);
              }}
            />
            <label htmlFor="fileInput" className={styles.fileInputLabel}>
              <CloudUploadIcon className={styles.fileInputIcon} />
              {multipleUpload ? 'Upload Files' : 'Upload File'}
            </label>
          </>
        )}
      />
    </form>
  );
};

export default NewImagesUpload;
