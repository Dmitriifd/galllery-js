import { createElem } from './createElem.js';

export const renderPhoto = (photoWrapper, photo) => {
	const url = new URL(location.href);
	console.log(url.searchParams.get('photo'));

	const img = createElem('img', {
		className: 'photo__picture',
		src: photo.urls.regular,
		alt: photo.alt_description,
		style: 'max-height: 80vh',
	});

	const author = createElem('a', {
		className: 'photo__author',
		href: photo.user.links.html,
	});

	const avatar = createElem('img', {
		loading: 'lazy',
		src: photo.user.profile_image.medium,
		alt: photo.user.bio,
		title: photo.user.username,
		style: 'max-height: 80vh',
	});

	const userName = createElem('span', {
		textContent: photo.user.username,
	});

	const photoControl = createElem('div', {
		className: 'photo__control',
	});

	const photoLike = createElem('button', {
		className: 'photo__like',
		id: photo.id,
		textContent: photo.likes,
	});

	const photoDownload = createElem('a', {
		className: 'photo__download',
		download: 'true',
		href: photo.links.download,
		target: '_blank',
	});

	author.append(avatar, userName);
	photoControl.append(photoLike, photoDownload);
	photoWrapper.append(img, author, photoControl);
};
