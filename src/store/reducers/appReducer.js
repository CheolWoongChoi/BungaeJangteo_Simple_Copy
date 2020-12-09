
import { SOMETHING1 } from 'actionTypes';
import { SOMETHING2 } from 'actionTypes';

const initialState = {
	
};

export default function (state = initialState, action) {
	switch(action.type) {
		case SOMETHING1: 
			return {
				...state,
			};
		case SOMETHING2:
			return {
				...state,
			}
		default:
			return state;
	}
}