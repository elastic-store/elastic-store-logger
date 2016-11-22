# Introduction
A logger for [elastic-store](https://github.com/elastic-store/store).

## Installation

## Usage
It can be attached in two different ways.

### While creating a store
```javascript
import {Store} from "elastic-store";
import {logger} from "elastic-store-logger";

let actions = { ... };

let aStore = Store(actions, [logger]);
```

### After creating a store
```javascript
import {Store} from "elastic-store";
import {logger} from "elastic-store-logger";

let actions = {
	todos: {
		add () { ... },
		remove () { ... }
	},
	notification: { ... }
};

let aStore = Store(actions);

// will log changes made by actions at 'todos' node
aStore.attach("todos", logger);

// OR

// will log changes caused by action at 'todos.add'
aStore.attach("todos.add", logger);
```
