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

## About the database
In order to properly use this application, you need to setup your local postgres database


* The server will grab the dependencies from the try/catch in test/test.js

* The browser will grab the dependencies from the test_browser/bundle.js
