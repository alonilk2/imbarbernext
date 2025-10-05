export const publickey = "ksha_y5zBwYyqOlzl";
export const reviewsQuery = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJG9BR5jZPHBURb8zWwC2NxUg&fields=reviews&key=AIzaSyAVXkziwHH3h5oVuob61WZAhxL_6XkXzDc&reviews_no_translations=true";

const BASE_URL = "https://imbarber.com";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const normalizeSegment = (segment = "") => segment.replace(/^\/+|\/+$/g, "");

const normalizedBaseUrl = BASE_URL.replace(/\/$/, "");
const normalizedBasePath = normalizeSegment(basePath);
const basePrefix = normalizedBasePath ? `${normalizedBaseUrl}/${normalizedBasePath}` : normalizedBaseUrl;

export const withBasePath = (path = "") => {
	if (!path) {
		return basePrefix;
	}

	if (/^https?:\/\//i.test(path)) {
		return path;
	}

	if (path.startsWith("/")) {
		return `${basePrefix}${path}`;
	}

	return `${basePrefix}/${path}`;
};
