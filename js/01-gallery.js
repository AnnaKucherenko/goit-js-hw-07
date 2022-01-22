import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
console.log( galleryContainer);
const cardsMarkup = createImageCardsMarkup(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImageCardsMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
    return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `;
        })
        .join('');
    console.log(createImageCardsMarkup);
}

function onGalleryContainerClick(evt) {
    evt.preventDefault();   
    const imgEl = evt.target.classList.contains('gallery__image');
    
    if (!imgEl) {
        return;
    }
    const imgOriginal = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
        <div class="modal">
            <img src="${imgOriginal}">
        </div>
    `)

    instance.show(document.addEventListener('keydown', onModalWindowKeydownEsc))

    function onModalWindowKeydownEsc(evt) {
        if (evt.keyCode === 27) {
            instance.close();
        }
    }
    
}







