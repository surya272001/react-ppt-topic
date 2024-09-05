const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const upload = multer({ dest: '/backend/uploads/' });

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.send({
    fileName: req.file.filename,
    filePath: `/backend/uploads/${req.file.filename}`,
  });
});

app.get('/api/files', (req, res) => {
  const fs = require('fs');
  const files = fs.readdirSync('uploads').map(file => ({
    fileName: file,
    filePath: `/backend/uploads/${file}`,
  }));
  res.json(files);
});

app.use('/backend/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});
