import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
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
              data-source="${item.original}"
              alt="${item.description}"
            />
          </a>
        </li>`,
    ''
  );
}

const galleryUl = document.querySelector('.gallery');
galleryUl.insertAdjacentHTML('beforeend', createLi(galleryItems));

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const dataValue = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src = '${dataValue}'/> `);
  instance.show();

  function onKeyDownEsc(event) {
    if (event.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onKeyDownEsc);
    }
  }
  window.addEventListener('keydown', onKeyDownEsc);
}

galleryUl.addEventListener('click', onClick);
