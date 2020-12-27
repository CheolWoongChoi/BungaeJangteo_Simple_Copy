
import { GET_PRODUCTS, GET_SUGGESTS } from 'actionTypes';

const initialState = {
	products: [],
	suggests: []
};

export default function (state = initialState, action) {
	switch(action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload.list
			}
		case GET_SUGGESTS:
			return {
				...state,
				suggests: action.payload
			}
		default:
			return state;
	}
}