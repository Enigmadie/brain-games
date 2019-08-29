install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
	npx babel-node -- src/bin/brain-prime.js
	npx babel-node -- src/bin/brain-progression.js
	npx babel-node -- src/bin/brain-calculate.js
	npx babel-node -- src/bin/brain-gcd.js
	npx babel-node -- src/bin/brain-even.js
publish:
	npm publish
lint:
	npx eslint .

