importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyC030oXKLnWVVv7kesDEtJpJk-1Z4053k0",
    authDomain: "myclock-da630.firebaseapp.com",
    databaseURL: "https://myclock-da630.firebaseio.com",
    projectId: "myclock-da630",
    storageBucket: "myclock-da630.appspot.com",
    messagingSenderId: "594627145883"
});

const messaging = firebase.messaging();