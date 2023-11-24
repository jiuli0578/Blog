module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    // 不引入 a11y 规则。P.S. 也可以直接禁用 rules， 见 https://github.com/airbnb/javascript/issues/2032#issuecomment-568934232
    "airbnb-base",
    "airbnb/rules/react",
    "airbnb/hooks"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["import", "react", "react-hooks", "@typescript-eslint"],
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      "eslint-import-resolver-custom-alias": {
        alias: {
          "@": "./src"
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
      }
    }
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-param-reassign": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "react/react-in-jsx-scope": 0,// 不需要在每个文件中都引入React
    // 对已声明未使用的变量报错
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "off",
    //  不允许if 和 else if判断相同
    "no-dupe-else-if": "error",
    //  强制变量必须小驼峰命名规则
    camelcase: "error",
    //  强制必须使用完全比较
    eqeqeq: "error",
    //  禁止else语句中只包含 if语句，应该修改为 else if
    "no-lonely-if": "error",
    //  允许ts指定类型为any
    "@typescript-eslint/no-explicit-any": "off",
    //  允许对非null进行断言
    "@typescript-eslint/no-non-null-assertion": "off",
    //  允许定义空接口
    "@typescript-eslint/no-empty-interface": "off",
    //  禁止在函数中进行无意义的返回
    "no-useless-return": "error",
    //  对于字符串拼接，限制只能使用字符串模板的方式 `hello ${name}`
    "prefer-template": "error",
    //  限制模块导入不可重复
    "no-duplicate-imports": "error",
    // 重新配置 react-hooks 相关内容
    "react-hooks/rules-of-hooks": "error"
  }
};
