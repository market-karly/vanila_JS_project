module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],

  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // var는 사용할 수 없다
    "no-var": ["error"],
    // 세미콜론은 필수적으로 사용한다
    semi: ["error", "always"],
    // if 문에서 return을 하면 else 문에서 return을 할 수 없다
    "no-else-return": ["error"],
    // 불필요한 반복문은 사용할 수 없다
    "no-unreachable-loop": ["error"],
    // 선언한 표현식은 반드시 사용해야 한다
    "no-unused-expressions": ["error"],
    // 선언하지 않은 코드를 사용할 수 없다
    "no-use-before-define": ["error"],
    // 도달하지 못하는 코드는 사용할 수 없다
    "no-unreachable": ["error"],
    // if ~ else 중첩은 허용하지 않는다
    "max-depth": [
      "error",
      {
        max: 1,
      },
    ],
    // 삼항연산자를 허용하지 않는다
    "no-unneeded-ternary": [
      "error",
      {
        defaultAssignment: false,
      },
    ],
    // console.log 는 사용할 수 없다
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
  },
};
