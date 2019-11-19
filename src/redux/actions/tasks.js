import { ADD_CHECKLIST, ADD_TASK, REMOVE_TASKS } from '../../../config';
import { AsyncStorage } from 'react-native';

export function saveTask(data) {
	return AsyncStorage.setItem(`@data${data.id}`, JSON.stringify(data))
		.then((e) => {
			console.log(e);
		})
		.catch((fak) => {
			console.log(fak);
		});
}

export function addTask(data, dispatch) {
	return dispatch({
		type: ADD_TASK,
		payload: data
	});
}

export function removeTask(data, dispatch) {
	return dispatch({
		type: REMOVE_TASKS,
		payload: data
	});
}

export function addChecklist(data, dispatch) {
	return dispatch({
		type: ADD_CHECKLIST,
		payload: data
	});
}
