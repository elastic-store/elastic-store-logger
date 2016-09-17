export const logger = (config) => {
	return (actionPath, next, store) => {
		return (state, payload) => {
			console.log(actionPath, payload);
			console.log("Old state:", state);

			let newState = next(state, payload);

			console.log("New state:", newState);
			return newState;
		}
	};
};
