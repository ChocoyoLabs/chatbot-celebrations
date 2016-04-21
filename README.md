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

    $ sequelize db:seed:all --seeders-path node_modules/chatbot-celebrations/seeders/

or

    $ sequelize db:seed --seeders-path node_modules/chatbot-celebrations/seeders --seed chatbot-celebrations-seeder.js

## Remove

    $ sequelize db:seed:undo:all --seeders-path node_modules/chatbot-celebrations/seeders/

or

    $ sequelize db:seed:undo --seeders-path node_modules/chatbot-celebrations/seeders --seed chatbot-celebrations-seeder.js
