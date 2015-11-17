# node-firebase-auth-example

<h1>SETUP</h1>

Change user_service.js line:

<code>var firebaseRef = new Firebase('https://your-app-id.firebaseio.com');</code>

in order to use your Firebase app.

To run the server:

<code>npm install</code><br>
<code>npm start</code>

<h1>API</h1>

<b>POST /user</b> Creates a new user

Headers: user-email, user-pass

<b>POST /login</b> Perform authentication

Headers: user-email, user-pass
