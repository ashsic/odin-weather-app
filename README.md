# webpack-template-01
Template repo with webpack, eslint, prettier configured

quick setup:

npm install webpack webpack-cli prettier eslint eslint-config-prettier --save-dev

./node_modules/.bin/eslint --init

in VSCode:
settings > command palette >
Preferences: Open Workspace Settings (JSON)
paste the following:
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript"]
}

node --eval "fs.writeFileSync('.prettierrc','{}\n')"

check with: npx eslint-config-prettier dist/main.js

#########################################################

view these links for reference:
https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page
https://www.theodinproject.com/lessons/node-path-javascript-linting
https://prettier.io/docs/en/install
https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code
https://github.com/prettier/eslint-config-prettier#installation