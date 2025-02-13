import axios from 'axios';

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
