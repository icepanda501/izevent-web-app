import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyByZAfxLTJ2EKz5C8jabDvMBfyZY-0mT8o",
    authDomain: "bidodos-43e72.firebaseapp.com",
    databaseURL: "https://izevent.firebaseio.com/",
    projectId: "izevent",
    messagingSenderId: "704947940015",
    appId: "1:704947940015:web:c288509025982e2141425a"
}

firebase.initializeApp(firebaseConfig);

export default firebase