import { createElem } from './createElem.js';

export const renderPhoto = (photoWrapper, photo) => {
	const url = new URL(location.href);
	console.log(url.searchParams.get('photo'));

	const pagePhoto = new Image();
	pagePhoto.className = 'photo__picture';
	pagePhoto.src = photo.urls.full;
	pagePhoto.alt = photo.alt_description;
	pagePhoto.style = 'max-height: 80vh';

	const photoLink = createElem('a', {
		href: 'https://unsplash.com/@supergios',
		className: 'photo__author',
	});

	const photoLinkImg = new Image();
	photoLinkImg.loading = 'lazy';
	photoLinkImg.src = photo.user.profile_image.small;
	photoLinkImg.alt = photo.alt_description;
	photoLinkImg.title = photo.alt_description;
	photoLinkImg.style = 'max-height: 80vh';

	const photoAuthor = createElem('span', {
		textContent: photo.user.first_name,
	});

    photoLink.append(photoLinkImg, photoAuthor);

	const pageControl = createElem('div', {
		className: 'photo__control',
	});

	const photoBtnLike = createElem('button', {
		className: 'photo__like',
		id: photo.id,
		textContent: photo.likes,
	});

	const photoDownloadLink = createElem('a', {
		class: 'photo__download',
		download: true,
		href: photo.links.download,
        target: '_blank'
	});

    pageControl.append(photoBtnLike, photoDownloadLink);

	console.log(photo);

	photoWrapper.append(pagePhoto, photoLink, pageControl);
};

const html = /* html */ `
    <img                class="photo__picture"
						src="https://images.unsplash.com/photo-1654363137357-9d897b5a20d7?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMDE0MzF8MHwxfGFsbHx8fHx8fHx8fDE2NTQ1MjMzNjE&amp;ixlib=rb-1.2.1&amp;q=80"
						alt="null"
						style="max-height: 80vh"
					/>
                    <a class="photo__author" href="https://unsplash.com/@supergios"
						><img
							loading="lazy"
							src="https://images.unsplash.com/profile-1600184424687-de96bd61fa67image?ixlib=rb-1.2.1&amp;crop=faces&amp;fit=crop&amp;w=64&amp;h=64"
							alt="Always looking for the next adventure to capture the next shot. Seize the day. Sony A7 IV . There are more images behind my Unplash, for commercial projects please contact me.  John 3:16"
							title="Jonny Gios"
						/><span>Jonny Gios</span>
                    </a>

					<div class="photo__control">
						<button id="JIqH1ps4eK8" class="photo__like">30</button>
						<a
							class="photo__download"
							download="true"
							href="https://unsplash.com/photos/JIqH1ps4eK8/download?ixid=MnwzMDE0MzF8MHwxfGFsbHx8fHx8fHx8fDE2NTQ1MjMzNjE"
							target="_blank"
						></a>
					</div>

`;
