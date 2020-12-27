
import { GET_PRODUCTS, GET_SUGGESTS } from 'actionTypes';
import axios from 'axios';

export const getProducts = ({ keyword, order }) => async dispatch => {
	const response = await axios.get('https://api.stg-bunjang.co.kr/api/1/find_v2.json', {
		params: {
			q: keyword,
			order,
			version: 4
		}
	});

	dispatch({
		type: GET_PRODUCTS,
		payload: { keyword, list: response.data.list }
	});

	document.querySelector('.order-tab .selected')?.classList.remove('selected'); 
	document.querySelector(`.order-tab .${order}`).classList.add('selected');
};


export const getSuggests = ({ keyword }) => async dispatch => {
	const response = await axios.get('https://api.stg-bunjang.co.kr/api/1/search/suggests_keyword.json', {
		params: {
			q: keyword,
			type: 'product',
			v: 2
		}
	});
	let suggests = response.data.keywords;

	if (suggests.length > 10) {
		suggests = suggests.slice(0, 10);
	}

	dispatch({
		type: GET_SUGGESTS,
		payload: suggests
	});
}
