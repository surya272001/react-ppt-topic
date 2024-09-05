import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PDFViewer from './PDFViewer';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await axios.get('/api/files');
      setFiles(res.data);
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map(file => (
          <li key={file.fileName}>
            {file.fileName}
            {file.filePath.endsWith('.pdf') && <PDFViewer fileUrl={file.filePath} />}
            <a href={file.filePath} download>Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
