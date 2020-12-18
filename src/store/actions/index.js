
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

	dispatch({
		type: GET_PRODUCTS,
		payload: { keyword, list: response.data.list }
	});

	document.querySelector('.order-tab .selected')?.classList.remove('selected'); 
	document.querySelector(`.order-tab .${order}`).classList.add('selected');
};

export const something2 = () => ({
	type: SOMETHING2,
	payload: '',
});
