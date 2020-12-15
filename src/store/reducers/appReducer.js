
import { SOMETHING1 } from 'actionTypes';

const initialState = {
	
};

export default function (state = initialState, action) {
	switch(action.type) {
		case SOMETHING1: 
			return {
				...state,
			};
		default:
			return state;
	}
}