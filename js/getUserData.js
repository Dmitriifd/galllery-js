import { API_URL } from './const.js';

export const getUserData = async () => {
	const response = await fetch(`${API_URL}/me`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('Bearer')}`,
		},
	});
	return await response.json();
};
