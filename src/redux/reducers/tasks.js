export default function tasks(state = [], action) {
	switch (action.type) {
		case 'HEY':
			return { tasks: 'hey' };

		default:
			return state;
	}
}
