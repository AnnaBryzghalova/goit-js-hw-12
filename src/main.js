const PER_PAGE = 15;

const gallery = document.querySelector('ul.gallery');
const loadingMessage = document.querySelector('.loading-message');
const form = document.querySelector('#search-form');
form.addEventListener('submit', handleFormSubmit);

const nextPageBtn = document.querySelector('#next-page-btn');
nextPageBtn.addEventListener('click', () => loadNextPage());

let lastQuery = '';
let currentPage = 1;
let totalImages = 0;

import { showError, showInfo } from './js/izi-toast-wrapper';
import { fetchImagesData } from './js/pixabay-api';
import { renderGalleryItems } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';

const slbConfig = {
  captionsData: 'alt',
  captionDelay: 250,
};

const simplelightbox = new SimpleLightbox('.gallery a', slbConfig);

function handleFormSubmit(event) {
  event.preventDefault();
  const query = form.search.value.trim();
  if (query === '') {
    showError('Please enter a valid search query!');
    return;
  }

  if (query === lastQuery) {
    return;
  }

  gallery.innerHTML = '';
  lastQuery = query;
  currentPage = 1;
  loadImages(query, currentPage);
}

function loadNextPage() {
  currentPage++;
  loadImages(lastQuery, currentPage);
}

async function loadImages(query, page) {
  loadingMessage.classList.remove('hidden');
  setNextPageButtonVisible(false);

  try {
    const imagesData = await fetchImagesData(query, page, PER_PAGE);
    totalImages = imagesData.total;
    if (totalImages === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    } else {
      addImagesOnPage(imagesData.hits);
    }

    if (isLastPage()) {
      showInfo("We're sorry, but you've reached the end of search results.");
    } else {
      setNextPageButtonVisible(true);
    }

    if (page > 1) {
      scrollByNImages(2);
    }
  } catch (error) {
    showError(error.message);
  } finally {
    loadingMessage.classList.add('hidden');
  }
}

function isLastPage() {
  return currentPage >= Math.ceil(totalImages / PER_PAGE);
}

function addImagesOnPage(images) {
  gallery.insertAdjacentHTML('beforeend', renderGalleryItems(images));
  simplelightbox.refresh();
}

function setNextPageButtonVisible(visible) {
  console.log(`setNextPageButtonVisible: ${visible}`);
  if (visible !== nextPageBtn.classList.contains('hidden')) {
    return;
  }

  if (visible) {
    nextPageBtn.classList.remove('hidden');
  } else {
    nextPageBtn.classList.add('hidden');
  }
}

function scrollByNImages(imagesNum) {
  const firstImage = document.querySelector('.gallery-item');
  if (firstImage == null) {
    return;
  }

  const imageHeight = firstImage.getBoundingClientRect()['height'];
  console.log(imageHeight);

  window.scrollBy({
    top: imageHeight * imagesNum,
    behavior: 'smooth',
  });
}
