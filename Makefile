install:
	npm install
start:
	npx babel-node -- src/bin/brain-calculate.js
	npx babel-node -- src/bin/brain-nod.js
	npx babel-node -- src/bin/brain-even.js
publish:
	npm publish
lint:
	npx eslint .

