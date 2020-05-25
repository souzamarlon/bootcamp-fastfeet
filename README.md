<h1 align="center">
    <img alt="Fastfeet App" src="https://github.com/souzamarlon/bootcamp-fastfeet/blob/master/front-end/src/assets/logo.png" />
    <br>
    Fastfeet app for Rocketseat Bootcamp Final Challenge.
</h1>

<h4 align="center">
  A FullStack App to delivery.
</h4>

<div align="center">
  <img src="https://user-images.githubusercontent.com/42625569/82815845-60749400-9e70-11ea-861d-67e04729b48d.gif" alt="demo-web" height="320">

</div>
    <a href="https://www.youtube.com/watch?v=k602NgpZCuQ" align="center">Better quality video</a>

<div align="center">
  <img src="https://user-images.githubusercontent.com/42625569/82817742-e940ff00-9e73-11ea-8636-61e470f7d3bb.gif" alt="demo-web" height="320">
</div>

<hr>

<p align="center">
  <a href="#rocket-Libraries and Technologies">Libraries and Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-front-end-demonstration">Front-end Demo</a>
</p>

## :rocket: Libraries and Technologies

This project was developed at the [RocketSeat GoStack Bootcamp Final Challenge](https://rocketseat.com.br/gostack) with the following amazing Libraries and Technologies:

Back-end:
- [NodeJS](https://nodejs.org)
- [Axios](https://github.com/axios/axios)
- [Immer](https://github.com/immerjs/immer)
- [date-fns](https://date-fns.org/)
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- [cors](https://github.com/expressjs/cors)
- [dotenv](https://github.com/motdotla/dotenv)
- [express](https://github.com/expressjs/express)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [multer](https://github.com/expressjs/multer)
- [pg](https://github.com/brianc/node-postgres)
- [nodemailer](https://github.com/nodemailer/nodemailer)
- [sequelize](https://github.com/sequelize/sequelize)
- [yup](https://github.com/jquense/yup)
- [sentry](https://sentry.io/)

Front-end:
- [ReactJS](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Immer](https://github.com/immerjs/immer)
- [date-fns](https://date-fns.org/)
- [material-ui](https://github.com/mui-org/material-ui)
- [@rocketseat/unform](https://github.com/Rocketseat/unform)
- [history](https://github.com/ReactTraining/history)
- [styled-components](https://www.styled-components.com/)
- [prop-types](https://github.com/facebook/prop-types)
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker)
- [Redux-Saga](https://redux-saga.js.org/)
- [react-select](https://github.com/JedWatson/react-select)
- [react-toastify](https://github.com/fkhadra/react-toastify)
- [reactjs-popup](https://github.com/yjose/reactjs-popup)
- [yup](https://github.com/jquense/yup)
- [prettier](https://prettier.io/)
- [reactotron](https://github.com/infinitered/reactotron)

React native:
- [React Native](https://facebook.github.io/react-native/)
- [react-navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [Immer](https://github.com/immerjs/immer)
- [Axios](https://github.com/axios/axios)
- [date-fns](https://date-fns.org/)
- [prop-types](https://github.com/facebook/prop-types)
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)
- [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
- [Reactotron](https://infinite.red/reactotron)
- [React-native-camera](https://github.com/react-native-community/react-native-camera)
- [React-native-image-editor](https://github.com/react-native-community/react-native-image-editor)

Back-end, Front-end, React native:
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: Front-end Demonstration:
<h4>Link: <a href="http://bootcamp-fastfeet-frontend.herokuapp.com/">http://bootcamp-fastfeet-frontend.herokuapp.com/</h4>
<h4>Login: admin@fastfeet.com</h4>
<h4>Password: 123456</h4>

<h4>Note:</h4>
<p> It is possible to take some secods to loading the page because Heroku can put the App to sleep after some minutes of inactivity.</p>
<p> It is necessary to access the site using "http" because I hosted the back end in Digital ocean and I do not have a domain to obtain the SSL Certificate from Certbot.</p>

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer.

You'll also need to setup and run a Postgres and a Redis database and insert the access informations into a .env file, based on a .env.example file that is provided in the backend, front-end folders.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/souzamarlon/bootcamp-fastfeet

# Go into the repository
$ cd bootcamp-fastfeet

# Install dependencies for backend:
$ cd backend
$ yarn

# Note:
# It is necessary to create the database in postgres and then you can execute yarn sequelize db:migrate.

# Run migrations and the seed to your database:
$ yarn sequelize db:migrate
$ yarn sequelize db:seed:all

# Note: 
# The command yarn sequelize db:seed:all is just necessary if you wanna create the admin user automatically.

# Run the backend server
# Development environmen:
$ yarn dev

# Production environment:
$ yarn start

# Development environment:
$ yarn queue 

# Production environment:
$ yarn queueProd

# Install dependencies for frontend and run the server:
$ cd frontend
$ yarn
$ yarn start

# Note: Available just for Android smartphones.
# Install dependencies for mobile
$ cd mobile
$ yarn

# Note:
# It is necessary to change the IP address in the api.js file to IP address where you installed the back end.
# You can find the api file at src/services/api.js

# Run the app (Android)
$ react-native run-android

# Start React Native Server
$ react-native start
```
---
Created by Marlon da Silva Souza :wave: [LinkedIn!](https://www.linkedin.com/in/marlonssouza/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

