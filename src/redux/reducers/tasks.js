import * as config from '../../../config';

const { ADD_TASK, REMOVE_TASKS, blue400, pink400, green400, white } = config;

export default function tasks(
	state = [
		{ id: 1, title: 'haloadadaaadadadadad', content: 'aodkaokd', bacol: white },
		{ id: 2, title: 'halo', content: 'aodkaokd', bacol: blue400 },
		{ id: 3, title: 'halo', content: 'aodkaokd', bacol: pink400 },
		{ id: 4, title: 'halo', content: 'aodkaokd', bacol: green400 },
		{ id: 5, title: 'halo', content: 'aodkaokd', bacol: blue400 }
	],
	action
) {
	const { type, payload } = action;
	switch (type) {
		case ADD_TASK:
			return [ ...state, { id: payload.id, title: payload.title, content: payload.content } ];

		case REMOVE_TASKS:
			return state;

		default:
			return state;
	}
}
