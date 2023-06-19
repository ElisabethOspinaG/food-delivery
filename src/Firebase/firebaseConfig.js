// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const RestaurantPage = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    // Configura tu proyecto Firebase
    const firebaseConfig = {
      apiKey: "4ce8e0f53ca84ab8bd35f9dffe44697b09949cf4",
      authDomain: "redux-firebase-front4.firebaseapp.com",
      projectId: "food-delivery-2b6c7",
      storageBucket: "redux-firebase-front4.appspot.com",
      messagingSenderId: "861762051105",
      appId: "1:861762051105:web:1ebf9abb87cdfdc1299760",
      measurementId: "G-MDD5WNHWH8",
    };

    // Inicializa Firebase
    firebase.initializeApp(firebaseConfig);

    // Obtén una referencia a la base de datos
    const database = firebase.database();

    // Realiza la consulta a la base de datos para obtener los restaurantes
    const restaurantesRef = database.ref('restaurantes');

    restaurantesRef.once('value', (snapshot) => {
      const data = snapshot.val();
      // Verifica si la data existe y es un objeto
      if (data && typeof data === 'object') {
        // Convierte el objeto de restaurantes en un array
        const restaurantesArray = Object.values(data);
        // Actualiza el estado con el array de restaurantes
        setRestaurantes(restaurantesArray);
      }
    });
  }, []);

  return (
    <div>
      {restaurantes.map((restaurante) => (
        <div key={restaurante.id}>
          <h1>{restaurante.nombre}</h1>
          <p>{restaurante.descripcion}</p>
          {/* Resto de la información del restaurante */}
        </div>
      ))}
    </div>
  );
};

export default RestaurantPage;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);