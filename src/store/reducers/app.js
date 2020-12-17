
import { GET_PRODUCTS } from 'actionTypes';

const initialState = {
	productList: [],
	keyword: ''
};

export default function (state = initialState, action) {
	switch(action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				keyword: action.payload.keyword,
				productList: action.payload.list
			}
		default:
			return state;
	}
}