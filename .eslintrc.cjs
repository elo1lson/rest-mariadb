module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['js', 'ignorePackages'],
    'class-methods-use-this': 'off',
    'no-console': 'off',
  },
};
