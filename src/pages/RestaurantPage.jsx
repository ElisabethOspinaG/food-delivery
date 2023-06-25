import React, {useEffect}from 'react';
import "../style/restaurantPage.scss";
import { FaStar } from 'react-icons/fa';
import { useDispatch,useSelector } from 'react-redux';
import {actionGetRestaurantAsync} from "../redux/actions/restaurantsAcions";

import { useParams } from "react-router-dom";



const RestaurantPage = () => {
  const dispatch=useDispatch();
  const {Restaurantes}=useSelector((store)=>store.restaurantStore)
 const { id } = useParams();
  const rating = 1;
  console.log(rating);
useEffect(()=>{
  dispatch(actionGetRestaurantAsync())
},[dispatch]); 
const selectedRestaurant = restaurants.find((restaurant) => restaurant.id === id);
 const StarRating = ({ rating }) => {
    const getStarColor = (starIndex) => {
      if (starIndex < rating) {
        return '#FFE031'; // Estilo para estrellas seleccionadas (color dorado)
      } else {
        return '#C4C4C4'; // Estilo para estrellas no seleccionadas (color gris)
      }
    };

    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            style={{ color: getStarColor(index) }}
          />
        ))}
      </div>
    );
  };
    const infoRestaurant = Restaurantes.length > 0 ? Restaurantes[0] : null;
    console.log(infoRestaurant);
    if (!selectedRestaurant) {
      return <div>Loading...</div>;
    } return (
    <div >
      <div className='container'>
        <button className="container__button">&lt; &nbsp;&nbsp;</button>
      </div>
      <img className="container__logo" src="{}"></img>
      <img className="container__logo2" src="https://th.bing.com/th/id/R.c22277a451f43346b2ab3fb59ceadf3c?rik=prmM3D5YO7VFRQ&pid=ImgRaw&r=0"></img>
      <figure className='container__figure'>
        <img className='container__image' src="https://th.bing.com/th/id/R.c22277a451f43346b2ab3fb59ceadf3c?rik=prmM3D5YO7VFRQ&pid=ImgRaw&r=0"></img>
      </figure>
      <section className='container__section'>
        <h1>Pardes Restaurant</h1>
        <h2 id="parrafo">Pardes Restaurant
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          15-20 min</h2>
      </section>
      <div id="duracion">  <h2 >15-30min</h2></div>

      <div id='rating'>
        <StarRating rating={rating} />
      </div>
      <div className='container__buttons1'>
        <div className='container__buttons'>
          <button id="button">Salad</button>
          <button id="button2">Coffee</button>
          <button id="button3">Drinks</button>
          <button id="button4">Meats</button>
        </div>
      </div>
      <div className='container__map'>
      {selectedRestaurant && (
            <div id="OneRestaurant" key={infoRestaurant.id}>
              <img src={infoRestaurant.imagenRestaurante} alt={infoRestaurant.nombre} />
              <span>{infoRestaurant.abierto}</span>
              <span>{infoRestaurant.calificacion}</span>
              <span>{infoRestaurant.descripcion}</span>
              <span>{infoRestaurant.duracionDomicilio}</span>
              <span>{infoRestaurant.lugar}</span>
              <span>{infoRestaurant.nombre}</span>
  
              <div>
                {infoRestaurant.platos && infoRestaurant.platos.length > 0 && infoRestaurant.platos.map((plato, index) => (
                  <div key={index}>
                    <span>{plato.nombrePlato ? plato.nombrePlato : ''}</span>
                    <span>{plato.descripcionPlato}</span>
                    <span>{plato.precioPlato}</span>
                    <span>{plato.precioPeparacion}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
                
              </div>
    </div>
  );
};

export default RestaurantPage;




