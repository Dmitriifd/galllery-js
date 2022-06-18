import { createElem } from './createElem.js';

const loadImage = (url, description) => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.width = 200;
		img.src = url;
		img.alt = description;
        img.addEventListener('load', () => {
            resolve(img)
        })
	});
};

export const createCardPhoto = async (data) => {
	const card = createElem('li', {
		className: 'card',
	});

	const cardItem = createElem('a', {
		id: data.id,
		className: 'grid-item',
		href: `page.html?photo=${data.id}`,
	});

	const photo = await loadImage(data.urls.small, data.alt_description);

	const author = createElem('a', {
		className: 'card__author',
		href: data.user.links.html,
	});

	const avatarAuthor = createElem('img', {
        className: 'author__photo',
        width: '32',
        height: '32',
        src: data.user.profile_image.medium,
        alt: data.user.bio,
        title: data.user.username,
    });

	author.append(avatarAuthor);

	const likeBtn = createElem('button', {
		className: 'card__photo-like',
		textContent: data.likes,
	});

	const downloadLink = createElem('a', {
		className: 'card__download',
		href: data.links.download,
		download: true,
		target: '_blank',
	});

	cardItem.append(photo, author, likeBtn, downloadLink);
	card.append(cardItem);

	return card;
};
