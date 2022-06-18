import { getData } from './getData.js';
import { renderGallery } from './renderGallery.js';
import { renderPhoto } from './renderPhoto.js';

const init = async ({ gallerySelector, photoSelector }) => {
	const galleryWrapper = document.querySelector(gallerySelector);
	const photoWrapper = document.querySelector(photoSelector);

	if (galleryWrapper) {
		const photos = await getData({ count: 30 });
		renderGallery(galleryWrapper, photos);
	}

	if (photoWrapper) {
		const url = new URL(location.href);
		const idPhoto = url.searchParams.get('photo');
		if (idPhoto) {
            const photo = await getData({ idPhoto });
            renderPhoto(photoWrapper, photo);
		}
	}
};

init({
	gallerySelector: '.gallery__wrapper',
	photoSelector: '.photo__wrapper',
});
