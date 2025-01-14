module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    "no-mixed-spaces-and-tabs": 0,
    "no-tabs": 0,
    // allow paren-less arrow functions
    //'arrow-parens': 0,
    //	"no-tabs":"off",
    // allow async-await
    //'generator-star-spacing': 0,
    //	"space-before-function-paren": 0,
    // allow debugger during development
    //'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
