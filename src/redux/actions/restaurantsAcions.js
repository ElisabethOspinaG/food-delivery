import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";
import { restaurantsTypes } from "../types/restaurantsTypes";

const collectionName = "Restaurantes";

export const actionGetRestaurantAsync = () => {
  return async (dispatch) => {
    const restaurantCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs(restaurantCollection);
    const Restaurantes = [];
    try {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        Restaurantes.push({
          id: doc.id,
          ...doc.data(),
        });
        // console.log(doc.id);
        //   console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(actionGetRestaurantsSync(Restaurantes));
    }
  };
};

const actionGetRestaurantsSync = (Restaurantes) => {
  return {
    type: restaurantsTypes.RESTAURANTS_GET,
    payload:Restaurantes,
    
  };
};

export const actionAddRestaurantsAsync = (Restaurantes) => {
  return async (dispatch) => {
    try {
      const restaurantCollection = collection(dataBase, collectionName);
      const docs = await addDoc(restaurantCollection, Restaurantes);
      dispatch(actionAddRestaurantSync({ id: docs.id, ...Restaurantes }));
    } catch (error) {
      console.log(error);
      dispatch(actionAddRestaurantSync({}));
    }
  };
};

const actionAddRestaurantSync = (Restaurantes) => {
  return {
    type: restaurantsTypes.RESTAURANTS_ADD,
    payload: Restaurantes,
  };
};

export const actionFilterRestaurantAsync = (searchParam, searchValue) => {
  return async (dispatch) => {
    const restaurantCollection = collection(dataBase, collectionName);
    const q = query(restaurantCollection, where(searchParam, "==", searchValue));
    const Restaurantes = [];
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        Restaurantes.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionFilterRestaurantSync(Restaurantes));
    }
  };
};

const actionFilterRestaurantSync = (Restaurantes) => {
  return {
    type: restaurantsTypes.RESTAURANTS_FILTERED,
    payload: {
        Restaurantes: Restaurantes,
    },
  };
};

export const actionFilterAsync = (searchParam) => {
  return async (dispatch) => {
    const restaurantCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs(restaurantCollection);
    const Restaurantes = [];
    try {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        Restaurantes.push({
          id: doc.id,
          ...doc.data(),
        });
        //   console.log(doc.id, " => ", doc.data());
      });
  
      const filteredRestaurants = Restaurantes.filter((item) =>
        item.name.toLowerCase().includes(searchParam.toLowerCase())
      );
      // dispatch(actionFilterRestaurantSync(filterdPaletas));
    } catch (error) {
      console.error(error);
      dispatch(actionFilterRestaurantSync([]));
    }
  };
};
