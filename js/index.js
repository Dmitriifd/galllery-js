import { getData } from './getData.js';
import { renderGallery } from './renderGallery.js';

const elem = document.querySelector('.selector');

const init = async () => {
	const photos = await getData();
	renderGallery(photos);
};

init();
