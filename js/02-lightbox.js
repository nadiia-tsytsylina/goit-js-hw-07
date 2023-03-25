import { galleryItems } from './gallery-items.js';
// Change code below this line

function createLi(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              alt="${item.description}"
            />
          </a>
        </li>`,
    ''
  );
}

const galleryUl = document.querySelector('.gallery');
galleryUl.insertAdjacentHTML('beforeend', createLi(galleryItems));

const images = document.querySelectorAll('.gallery__image');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
