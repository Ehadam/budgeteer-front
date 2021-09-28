const BASE_URL = 'http://localhost:8080/';

const get = async (path = '', queryParameters) => {
	const stringifiedParams = queryParameters 
			? '?' + new URLSearchParams(queryParameters).toString()
			: '';
	return fetch(BASE_URL + path + stringifiedParams)
}

const post = async (path = '', body, queryParameters) => {
	const stringifiedParams = queryParameters 
			? '?' + new URLSearchParams(queryParameters).toString()
			: '';
	return fetch(BASE_URL + path + stringifiedParams, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	});
}

export { get, post };