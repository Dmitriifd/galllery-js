import { authorization } from './autorization.js';
import { getData } from './getData.js';
import { handlerLike } from './handlerLike.js';
import { renderGallery } from './renderGallery.js';
import { renderPhoto } from './renderPhoto.js';

const init = async ({ gallerySelector, photoSelector, selectorAuthBtn }) => {
	const galleryWrapper = document.querySelector(gallerySelector);
	const photoWrapper = document.querySelector(photoSelector);
	const authBtn = document.querySelector(selectorAuthBtn);

	authorization(authBtn);

	if (galleryWrapper) {
		const photos = await getData({ count: 30 });
		renderGallery(galleryWrapper, photos);
	}

	if (photoWrapper) {
		const url = new URL(location.href);
		const idPhoto = url.searchParams.get('photo');
		if (idPhoto) {
			const photo = await getData({ idPhoto });
			const photoLike = renderPhoto(photoWrapper, photo);
            photoLike.addEventListener('click', () => {
                if (localStorage.getItem('Bearer')) {
                    handlerLike(photoLike)
                }
            })
		}
	}
};

init({
	gallerySelector: '.gallery__wrapper',
	photoSelector: '.photo__wrapper',
	selectorAuthBtn: '.header__login-button',
});
