export const logger = (config = {}) => {
	let defaults = {
		collapsed: true
	};

	config = Object.assign(defaults, config);

	return (actionPath, next, store) => {
		return (state, payload) => {
			let log = {};

			// open group
			if (config.collapsed) {
				console.groupCollapsed(actionPath);
			}
			else {
				console.group(actionPath);
			}

			log.payload = payload;
			log.oldState = Object.assign({}, state);

			let newState = next(state, payload);

			log.newState = Object.assign({}, newState);

			// log
			Object.keys(log).map((key) => {
				console.info("%c%s:%o", "font-weight: bold", key, log[key]);
			});

			// close group
			console.groupEnd(actionPath);

			return newState;
		}
	};
};
