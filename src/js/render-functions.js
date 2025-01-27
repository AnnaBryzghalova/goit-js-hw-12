function renderGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
  <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      <div class="gallery-item-info">
        <div class="field">
          <span class="label">Likes</span>
          <span class="value" data-likes>${likes}</span>
        </div>
        <div class="field">
          <span class="label">Views</span>
          <span class="value" data-views>${views}</span>
        </div>
        <div class="field">
          <span class="label">Comments</span>
          <span class="value" data-comments>${comments}</span>
        </div>
        <div class="field">
          <span class="label">Downloads</span>
          <span class="value" data-downloads>${downloads}</span>
        </div>
      </div>
  </a>
</li>`;
}

export function renderGalleryItems(images) {
  return images.map(renderGalleryItem).join('');
}
