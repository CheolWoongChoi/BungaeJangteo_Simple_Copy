
import { SOMETHING1 } from 'actionTypes';
import axios from 'axios';

export const something1 = () => async dispatch => {
	dispatch({
		type: SOMETHING1,
		payload: ''
	});
};

export const something2 = () => ({
	type: SOMETHING2,
	payload: '',
});
