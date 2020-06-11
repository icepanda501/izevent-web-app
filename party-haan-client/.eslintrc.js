module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  extends: 'airbnb',
  rules: {
    'arrow-parens': 0,
    'no-shadow': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/button-has-type': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'object-curly-newline': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
  },
};
