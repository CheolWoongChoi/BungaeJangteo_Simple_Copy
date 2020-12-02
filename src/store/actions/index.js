
import { SOMETHING } from '../actionTypes';

// Redux Thunk 액션
export const someThing = () => async dispatch => {
	dispatch({
		type: SOMETHING,
		payload: ''
	});
};

// 일반 Action
export const someThing2= () => ({
	type: SOMETHING,
	payload: ''
});
