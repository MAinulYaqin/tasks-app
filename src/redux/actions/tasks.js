import { ADD_CHECKLIST, ADD_TASK } from '../../../config';

export function addTask(data, dispatch) {
	return dispatch({
		type: ADD_TASK,
		payload: data
	})
}

export function addChecklist(data, dispatch) {
	return dispatch({
		type: ADD_CHECKLIST,
		payload: data
	});
}