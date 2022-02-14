# CPE307_TODO
# instructions to use prettier and eslint

# in your terminal:
1. npm install eslint -g --init
2. npx eslint -g --init
3. npm install eslint-config-prettier eslint-plugin-prettier prettier -g --save-dev

# within the eslint file
{
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope":"off"
    }
}

# make sure to add node_modules to your gitignore.
