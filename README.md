# Xavier

Don't read words, read people

## Install all the necessary devDependencies
```bash
npm install
```

## Initiate the database
```psql
psql -f database/schema.sql
```

## Setting up the database connection
In order to properly use this application, you need to change the connection settings in the file src/queries.js

```javascript
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.HOST || '127.0.0.1', 
        user: process.env.USER || 'nunoneves',  <------------- replace 'nunoneves' with your own computer's username
        hash: process.env.hash || '', 
        database: process.env.DATABASE || 'xavier'
    }
})
```

## Run the server
```bash
npm run server
```

## Run the react application
```bash
npm start
```

## Create a react production build
```bash
npm run build
```
