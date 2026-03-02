// eslint.config.cjs
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
	{
        ignores: [
            "coverage/**"
        ],
	},
]);
