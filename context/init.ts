import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAHDk6rRAich_0rIrBd0gYITXNy1RkRCVU',
  authDomain: 'medicachart.firebaseapp.com',
  projectId: 'medicachart',
  storageBucket: 'medicachart.appspot.com',
  messagingSenderId: '628440150713',
  appId: '1:628440150713:web:34fb3c6bee6a9198e9e168',
  measurementId: 'G-3C71X08RMW',
};

if (!firebase) {
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
}

export default firebase;
