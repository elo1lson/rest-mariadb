module.exports = {
	env: {
		browser: false,
		es2021: true,
	},
	extends: "airbnb-base",
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"imports/extensions": 0,
		"class-methods-use-this": "off",
		"no-console": "off",
		"no-param-reassign": "off",
	},
};
