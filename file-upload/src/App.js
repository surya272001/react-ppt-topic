import React from 'react';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';

function App() {
  return (
    <div className="App">
      <h1>File Upload and View App</h1>
      <FileUpload />
      <FileList />
    </div>
  );
}

export default App;
