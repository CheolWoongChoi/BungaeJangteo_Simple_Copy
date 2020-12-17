
import { GET_PRODUCTS } from 'actionTypes';
import axios from 'axios';

export const getProducts = ({ keyword, order }) => async dispatch => {
	const response = await axios.get('https://api.stg-bunjang.co.kr/api/1/find_v2.json', {
		params: {
			q: keyword,
			order,
			version: 4
		}
	});

	history.pushState(null, null, `/?q=${keyword}&order=${order}`);

	dispatch({
		type: GET_PRODUCTS,
		payload: { keyword, list: response.data.list }
	});
};

export const something2 = () => ({
	type: SOMETHING2,
	payload: '',
});
