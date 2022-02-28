# CPE307_TODO
# instructions to use prettier and eslint


Project BLURB
This project is a todo list that we are implementing to replace the notes app. It allows you to add, edit, and delete tasks on your todo list with ease.
On top of this it is displayed nicley and you can edit a task explicitley and easily by switching into edit mode for that task. On top of this, unlike other notes apps you may have on your phone we require explicit login so no one can view your secret todo's without you letting them. Adding onto this you can log out in order to make sure no one views your secrets if you leave your browser unattended. 

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
