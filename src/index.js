export const logger = (config) => {
	return (actionPath, next, store) => {
		return (state, payload) => {
			console.log(actionPath, payload);
			console.log("Old state:", Object.assign({}, state));

			let newState = next(state, payload);

			console.log("New state:", Object.assign({}, newState));
			return newState;
		}
	};
};
