import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9wHy3HlisWZ0f55KxZJBDuPieY9IosWo",
  authDomain: "news-web-c0afa.firebaseapp.com",
  projectId: "news-web-c0afa",
  storageBucket: "news-web-c0afa.appspot.com",
  messagingSenderId: "1046309643415",
  appId: "1:1046309643415:web:2654ffe32823e389f7b5d2"
};

const app = initializeApp(firebaseConfig);
export default app;