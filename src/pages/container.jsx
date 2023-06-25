import { useDispatch,useSelector } from 'react-redux';
import {actionGetRestaurantAsync} from "../redux/actions/restaurantsAcions";
import React, {useEffect}from 'react';
const Container = () => {
    const dispatch = useDispatch();
    const { Restaurantes } = useSelector((store) => store.Restaurantes);
  
    useEffect(() => {
      dispatch(actionGetRestaurantAsync());
    }, [dispatch]);
  
    const infoRestaurant = Restaurantes && Restaurantes.length > 0 ? Restaurantes[0] : null;
    console.log(infoRestaurant);
  
    return (
      <>
        <div id="allRestaurant" className="container__allRestaurant">
          {Restaurantes && Restaurantes.length > 0 && Restaurantes.map((restaurant, index) => (
            <div key={index}>
              <img src={restaurant.imagenRestaurante} alt={restaurant.nombre} />
              <span>{restaurant.nombre}</span>
              <span></span>
              <div>
                {restaurant.platos && restaurant.platos.length > 0 && restaurant.platos.map((plato, index) => (
                  <span key={index}>{plato.nombrePlato ? plato.nombrePlato : ''}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
  
        <div className="container__OneRestaurant">
          {infoRestaurant && (
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
      </>
    );
  };
  
  export default Container;
  