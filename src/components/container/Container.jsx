import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetRestaurantAsync } from '../../redux/actions/restaurantsAcions';

const Container = () => {
    // const dispatch = useDispatch();
    // const {restaurants} = useSelector((store)=> store.restaurantStore);
    

    // useEffect(() => {
    //   console.log(restaurants)
    //     dispatch(actionGetRestaurantAsync());
    //     console.log(restaurants)
       
    //     }, [dispatch]);


  return (
    <>
    <div className="container__infoRestaurant">
      {/* {restaurants && restaurants.length ? (
        restaurants.map((restaurant, index) => (
          <div key={index}>
            <img src={restaurant.imagenRestaurante} alt={restaurant.nombre} />
            <span>{restaurant.nombre}</span>
            <span></span>
            <div>
              {restaurant.platos && restaurant.platos.length ? (
                restaurant.platos.map((plato, index) => (
                  <span key={index}>{plato.nombrePlato?plato.nombrePlato:""}</span>
                ))
              ) : (
                ""
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>No hay restaurantes</h1>
      )} */}
    </div>
  </>

  )
}

export default Container