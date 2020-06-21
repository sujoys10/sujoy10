import firebase from 'firebase/app'
import 'firebase/database';


const config = {
    apiKey: 'AIzaSyDbE2RpFaXXhhPvG05aENZr555jLYMal4E',
    databaseURL: "https://sujoys10.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


const database = firebase.database();

export { database as default};
