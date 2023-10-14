module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
  rules: {
    'no-console': 'off',
  },
};