import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';

const options2 = {
	method: 'GET',
    contentType: "application/json",
    url: 'https://youtube-v31.p.rapidapi.com/',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI = async (url, result) => {
    await fetch(`${BASE_URL}${url}`, options2)
    .then((response) => response.json())
    .then((data) => result = data)

    return result;
}
    // const { data } = await axios.get(`{${BASE_URL}/${url}`, options);
    // return data;