import {diff} from "jsondiffpatch";

const logDiff = (diff) => {
	if (!diff) return;
	console.info("%cdiff:%O", "font-weight: bold", diff);
};

export const logger = (config = {}) => {
	let defaults = {
		collapsed: true,
		diff: true
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

			// get new state
			let newState = next(state, payload);

			log.newState = Object.assign({}, newState);
			log.diff = diff(log.oldState, log.newState);

			// log
			Object.keys(log).map((key) => {
				if (key === "diff") {
					logDiff(log[key]);
				}
				else {
					console.info("%c%s:%o", "font-weight: bold", key, log[key]);
				}
			});

			// close group
			console.groupEnd(actionPath);

			return newState;
		}
	};
};
