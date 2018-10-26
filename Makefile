install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
	npx babel-node -- src/bin/brain-even.js
	npx babel-node -- src/bin/brain-calculate.js
publish:
	npm publish
lint:
	npx eslint .

