import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpSBPFoG_OkcD6NwJjrcCcYJBWFGHcI_s",
  authDomain: "test-firestore-b15fe.firebaseapp.com",
  projectId: "test-firestore-b15fe",
  storageBucket: "test-firestore-b15fe.appspot.com",
  messagingSenderId: "353560788487",
  appId: "1:353560788487:web:e1831247ccc5103b3a34a2",
  measurementId: "G-KZW0RQ9KV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     
    </>
  )
}
