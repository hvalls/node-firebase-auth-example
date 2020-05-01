# node-firebase-auth-example

In this project, I show you how to create a user and authenticate it against your Firebase app, using her email and password.

# Run

Export FIREBASE_API_KEY environment variable before run. It is used in `user_service.js` file to connect to your Firebase app.

## Yarn

```
$ yarn install
$ yarn start
```

## npm

```
$ npm install
$ npm start
```

# API

## Create a user
```
POST /signup
{ "email": "john.doe@mail.com", "password": "1234" }
```

## Login
```
POST /signin
{ "email": "john.doe@mail.com", "password": "1234" }
```

Both endpoints return a Firebase UserCredential (https://firebase.google.com/docs/reference/js/firebase.auth#usercredential)
