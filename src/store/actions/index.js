
import { SOMETHING1, SOMETHING2 } from 'actionTypes';

// Redux Thunk 액션
export const someThing1 = () => async dispatch => {
	dispatch({
		type: SOMETHING1,
		payload: ''
	});
};

// 일반 Action
export const someThing2= () => ({
	type: SOMETHING2,
	payload: ''
});
