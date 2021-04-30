import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app'

// const firebase = require('firebase');
// require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyCKDiGX5ka1ZTp7dAADQDDpWXckNLb9pxQ",
  authDomain: "dheeraj-evernote.firebaseapp.com",
  databaseURL: "https://dheeraj-evernote-default-rtdb.firebaseio.com",
  projectId: "dheeraj-evernote",
  storageBucket: "dheeraj-evernote.appspot.com",
  messagingSenderId: "370803470099",
  appId: "1:370803470099:web:6d2bea02a411965c5ef4e6"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
