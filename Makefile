install:
	npm install
start:
	npx babel-node -- src/bin/brain-calculate.js
publish:
	npm publish
lint:
	npx eslint .

