module.exports = {
  presets: [
    '@babel/preset-env',  // Transpile ES6+ syntax to ES5
    '@babel/preset-react' // Transpile JSX and React-specific syntax
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import' // Enable dynamic import syntax
  ]
};
