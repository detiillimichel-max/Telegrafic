// Firebase central (USADO EM TODO O APP)

const firebaseConfig = {
    apiKey: "AIzaSyAslIIn6h6NdVhuHdwXjS1EhAbItrAXq7Y",
    databaseURL: "https://vibe-app-bbba2-default-rtdb.firebaseio.com/",
    projectId: "vibe-app-bbba2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const DB = firebase.database();
