import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyCWOlz2Dwo4p1pzGTDNSaFvINNt-lipFsw",
  authDomain: "film-app-3fe57.firebaseapp.com",
  projectId: "film-app-3fe57",
  storageBucket: "film-app-3fe57.appspot.com",
  messagingSenderId: "1017472665454",
  appId: "1:1017472665454:web:2a343473f7a08b78e1237f",
  measurementId: "G-BS41C461CX"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

reportWebVitals();
