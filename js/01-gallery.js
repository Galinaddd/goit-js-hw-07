import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);

// rendering markup

const markup = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
      <a  class="gallery__link" href=" " >
      <img class="gallery__image"
      src="${item.preview}" alt="${item.description}" 
      data-source="${item.original}"/>
      </a>
      </div>`
  )
  .join('');
// console.log(markup);
galleryRef.insertAdjacentHTML('beforeend', markup);

galleryRef.addEventListener('click', onImgClick);

let instance;
function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  //   console.log(evt.target);
  //   console.log(evt.target.dataset.source);
  instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
  instance.show();
  document.addEventListener('keydown', onEscapePress);
}

function onEscapePress(evt) {
  if (evt.code === 'Escape') instance.close();
  document.removeEventListener('keydown', onEscapePress);
}
