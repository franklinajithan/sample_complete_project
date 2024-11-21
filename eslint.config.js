module.exports = [
    {
      files: ["src/**/*.{js,jsx,ts,tsx}"],
      languageOptions: {
        parser: require("@typescript-eslint/parser"),
        parserOptions: {
          ecmaVersion: 2021,
          sourceType: "module",
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        react: require("eslint-plugin-react"),
        "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
        tailwindcss: require("eslint-plugin-tailwindcss"),
      },
      rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "tailwindcss/classnames-order": "warn",
      },
    },
  ];
  