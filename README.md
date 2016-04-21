# chatbot-celebrations

## celebration.wikipedia

Holiday information from wikipedia

**Regular Expresion**:
* http://rubular.com/r/UTYxv45WVn (celebra\shoy)
* http://rubular.com/r/r6tuRngLLk (festividades)
* http://rubular.com/r/79gQOPqySu (celebraciones)

**Questions**
* ¿Qué se celebra hoy?
* ¿Qué festividades hay hoy?
* ¿Qué celebraciones hay hoy?
* ¿Qué celebraciones hay en nicaragua?

## Setup

### 1 - Install from github

    $ npm install ChocoyoLabs/chatbot-celebrations --save

### 2 - Insert commands from seed

    $ sequelize db:seed:all --seeders-path node_modules/chatbot-celebrations/seeders/

or

    $ sequelize db:seed --seeders-path node_modules/chatbot-celebrations/seeders --seed chatbot-celebrations-seeder.js

### 3 - Create command file

On chatbot project create file ./commands/celebrations.js

    var celebrations = require('chatbot-celebrations');
    exports.wikipedia = celebrations.wikipedia;

## To remove this module

### 1 - Delete command file

On chatbot project

    $ rm ./commands/celebrations.js

### 2 - Remove seed

    $ sequelize db:seed:undo:all --seeders-path node_modules/chatbot-celebrations/seeders/

or

    $ sequelize db:seed:undo --seeders-path node_modules/chatbot-celebrations/seeders --seed chatbot-celebrations-seeder.js

### 3 - Remove module from package

Edit **package.json** to remove **ChocoyoLabs/chatbot-celebrations**
