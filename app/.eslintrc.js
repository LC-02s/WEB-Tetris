module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "extends": ['airbnb-base', 'plugin:node/recommended', 'prettier'],
  "rules": {
    'no-console': 'off',
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  }
};
