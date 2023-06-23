import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetRestaurantAsync } from '../../redux/actions/restaurantsAcions';

const Container = () => {
    const dispatch = useDispatch();
    const {restaurants} = useSelector((store)=> store.restaurantStore);

    useEffect(() => {
      console.log(restaurants)
        dispatch(actionGetRestaurantAsync());
        }, [dispatch]);


  return (
    <>
      <div className="container__infoRestaurant">
        {restaurants && restaurants.length ? (
          restaurants.map((restarunt, index) =>(
          <figure key={index}>
            <img src={restaurants.image_url}/>
         </figure>
          )))
        : (<h1>No hay restaurantes</h1>)
           
        },
      
      </div>

    </>

  )
}

export default Container