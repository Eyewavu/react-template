module.exports ={
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    "arrow-spacing":["warn"],
    "camelcase":["warn"],
    "capitalized-comments":["warn"],
    "consistent-return":["error"],
    "default-case-last":["error"],
    "default-case":["warn"],
    "dot-notation":["error"],
    "eqeqeq":["error"],
    "linebreak-style": ["error","unix"],
    "no-console":["warn"],
    "no-constant-binary-expression":["error"],
    "no-duplicate-imports":["warn",{"includeExports":true}],
    "no-empty-function":["error"],
    "no-eval":["error"],
    "no-floating-decimal":["warn"],
    "no-lone-blocks":["error"],
    "no-lonely-if":["error"],
    "no-mixed-operators":["error"],
    "no-new-wrappers":["error"],
    "no-self-compare":["error"],
    "no-unreachable-loop":["error"],
    indent: ["error",2],
    quotes: ["error","double"],
    semi: ["warn","never"],
    "react/react-in-jsx-scope":["off"]
  }
}
