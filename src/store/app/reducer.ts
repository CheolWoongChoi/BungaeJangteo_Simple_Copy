import { GET_PRODUCTS, GET_SUGGESTS } from './actions';
import { AppState, AppAction } from './types';

const initialState: AppState = {
	products: [],
	suggests: []
};

export default function (state = initialState, action: AppAction): AppState {
	switch(action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload.data
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