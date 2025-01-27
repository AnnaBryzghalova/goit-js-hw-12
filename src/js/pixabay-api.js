const API_KEY = '48467053-1861d826b8af29f86703a6302';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  //per_page: PER_PAGE,
});

export function fetchImages(searchQuery) {
  return fetch(`${BASE_URL}?q=${searchQuery}&${searchParams.toString()}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    }
  );
}
