import * as config from '../../../config';

const { ADD_TASK, REMOVE_TASKS, blue400, pink400, green400, white } = config;

export default function tasks(state = [], action) {
	const { type, payload } = action;
	switch (type) {
		case ADD_TASK:
			return [ ...state, { id: payload.id, title: payload.title, content: payload.content } ];

		case REMOVE_TASKS:
			const newState = state.filter((e) => e.id !== action.payload);

			return newState;

		default:
			return state;
	}
}
