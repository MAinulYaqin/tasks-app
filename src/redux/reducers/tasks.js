import { ADD_TASK, REMOVE_TASKS } from '../../../config';

export default function tasks(state = [], action) {
	const { type, payload } = action;
	switch (type) {
		case ADD_TASK:
			return [ ...state, { id: payload.id, title: payload.title } ];

		case REMOVE_TASKS:
			return state;

		default:
			return state;
	}
}
