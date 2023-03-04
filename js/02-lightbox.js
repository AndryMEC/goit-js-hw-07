import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const createElem = createCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', createElem);

function createCards() {
    return galleryItems.map(({ original, preview, description }) => {
        return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
    }).join("")
}

galleryContainer.innerHTML = createElem;

galleryContainer.addEventListener('click', clickOnLink);

function clickOnLink(event) {
    event.preventDefault();
    const lightbox = new SimpleLightbox('.gallery a', `
    <img width = "1400" height = "900" src = "${event.target.dataset.source}">`)
}