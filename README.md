# CPE307_TODO
# Project BLURB
This project is a todo list that we are implementing to replace the notes app. It allows you to add, edit, and delete tasks on your todo list with ease.
On top of this it is displayed nicley and you can edit a task explicitley and easily by switching into edit mode for that task. On top of this, unlike other notes apps you may have on your phone we require explicit login so no one can view your secret todo's without you letting them. Adding onto this you can log out in order to make sure no one views your secrets if you leave your browser unattended. 
# UI PROTOTYPE (March 3rd 2022)
https://www.figma.com/file/QBv49W4c3lSvG3bTsCMRVE/2Do-List?node-id=0%3A1

# Diagrams
- https://github.com/PapaChang07/CPE307_TODO/wiki
---
# CI Server For Project
![Node.js CI](https://github.com/PapaChang07/CPE307_TODO/actions/workflows/backend.yml/badge.svg)
![Node.js CI](https://github.com/PapaChang07/CPE307_TODO/actions/workflows/frontend.yml/badge.svg)
---
https://github.com/PapaChang07/CPE307_TODO/actions
# Heroku Deployment
- https://cpe307-todo-frontend.herokuapp.com/
- https://cpe307-todo-backend.herokuapp.com/

# Development Setup (Note In order to run locally you must comment out the get/ post call to heroku in List.js, listview.js, todo.js, signin.js and login.js  in favor of the local hosted backend).
- Clone the Github Repository
- Change directory to the backend and run npm install
- Change directory to frontend and run npm install
- Run the backend and frontend seperatley using npm start (run the backend first)


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
