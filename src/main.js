const gallery = document.querySelector('ul.gallery');
const loadingMessage = document.querySelector('.loading-message');
const form = document.querySelector('#search-form');
form.addEventListener('submit', handleFormSubmit);

import { showError } from './js/izi-toast-wrapper';
import { fetchImages } from './js/pixabay-api';
import { renderGalleryItems } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';

const slbConfig = {
  captionsData: 'alt',
  captionDelay: 250,
};

var simplelightbox = new SimpleLightbox('.gallery a', slbConfig);

function handleFormSubmit(event) {
  event.preventDefault();
  const query = form.search.value.trim();
  if (query === '') {
    showError('Please enter a valid search query!');
    return;
  }

  gallery.innerHTML = '';
  loadingMessage.classList.remove('hidden');
  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      console.log(data);
      addImagesOnPage(data.hits);
    })
    .catch(error => {
      showError(error);
    })
    .finally(() => {
      loadingMessage.classList.add('hidden');
    });
}

function addImagesOnPage(images) {
  gallery.insertAdjacentHTML('beforeend', renderGalleryItems(images));
  simplelightbox.refresh();
}
