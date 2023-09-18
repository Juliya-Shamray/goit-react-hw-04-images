import axios from 'axios';

const API_KEY = '38990846-6ef50e95cf88c84afac172328';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async params => {
  const res = axios.get('', {
    params: {
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      key: API_KEY,
      ...params,
    },
  });
  return res;
};
