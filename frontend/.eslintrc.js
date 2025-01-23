module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser', // Use Babel parser
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
    ecmaVersion: 12, // Support ES12
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
    },
  },
  extends: [
    'eslint:recommended', // Base recommended rules
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // React hooks rules
    'airbnb', // Airbnb style guide
    'prettier', // Disable ESLint rules conflicting with Prettier
  ],
  plugins: ['react', 'react-hooks', 'babel'], // Plugins for React and Babel
  rules: {
    'react/react-in-jsx-scope': 'off', // Suppress error for React in new JSX
    'react/prop-types': 'off', // Disable prop-types if using TypeScript
    'babel/semi': 'error', // Ensure semicolons with Babel
    'babel/no-invalid-this': 'error', // Prevent invalid `this` usage
  },
  settings: {
    react: {
      version: 'detect', // Auto-detect React version
    },
  },
};
