import { getData } from './getData.js';
import { renderGallery } from './renderGallery.js';
import { renderPhoto } from './renderPhoto.js';

const init = async ({ gallerySelector, photoSelector }) => {
	const galleryWrapper = document.querySelector(gallerySelector);
	const photoWrapper = document.querySelector(photoSelector);

	if (galleryWrapper) {
		const photos = await getData('data.json');
		renderGallery(galleryWrapper, photos);
	}

	if (photoWrapper) {
        const url = new URL(location.href);
        console.log(url.searchParams.get('photo'));

        const photo = await getData('photo.json');
        renderPhoto(photoWrapper, photo);
	}
};

init({
	gallerySelector: '.gallery__wrapper',
	photoSelector: '.photo__wrapper',
});
