const API_KEY = '48467053-1861d826b8af29f86703a6302';

import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';

const defaultParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export async function fetchImagesData(searchQuery, page = 1, per_page = 15) {
  const response = await axios.get('/api/', {
    params: {
      q: searchQuery,
      page,
      per_page,
      ...defaultParams,
    },
  });

  return response.data;
}
