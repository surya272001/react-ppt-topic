import React, { useState } from 'react';
import { uploadFile } from '../services/fileService';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      await uploadFile(file);
      alert('File uploaded successfully');
    } catch (error) {
      alert('File upload failed');
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} accept=".pdf,.png,.jpg,.jpeg" />
        <button type="submit">Upload</button>
      </form>

      {preview && <iframe src={preview} width="600" height="500" title="file preview"></iframe>}
    </div>
  );
};

export default FileUpload;
