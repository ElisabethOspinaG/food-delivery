import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import {
  actionGetRestaurantAsync
} from "../redux/actions/restaurantsAcions";

import "../style/styleHome.scss";
import LayoutHome from "../components/layout/LayoutHome";
import location from "../assets/img/home/Location.svg";
import promToday from "../assets/img/home/promToday.svg";
import prom2 from "../assets/img/home/prom2.svg";
import ButtonFilter from "../components/buttons/ButtonFilter";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((store) => store.restaurantStore);

  useEffect(() => {
    dispatch(actionGetRestaurantAsync());
  }, [dispatch]);

  const StarRating = ({ rating }) => {
    const getStarColor = (starIndex) => {
      if (starIndex < rating) {
        return "#FFE031"; // Style for selected stars (golden color)
      } else {
        return "#C4C4C4"; // Style for unselected stars (gray color)
      }
    };

    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} style={{ color: getStarColor(index) }} />
        ))}
      </div>
    );
  };

  const navigate = useNavigate();
  const handleClick = ( id) => {
    navigate(`/restaurant/${id}`);
  };
  

  return (
    <>
      <section className="home">
        <div className="home__container-location">
          <div className="home__img-location">
            <img src={location} alt="" />
          </div>
          <div className="home__container-textLocation">
            <span className="home__text-location">DELIVER TO</span>
            <span className="home__location"> 882 Well St, New-York</span>
          </div>
        </div>
        <div className="home__container-promotions">
          <div className="home__promotions1">
            <figure className="home__figurePromo1">
              <img src={promToday} alt="today" />
            </figure>
          </div>
          <div className="home__promotions2">
            <figure className="home__figurePromo2">
              <img className="home__imgPromo2" src={prom2} alt="" />
            </figure>
          </div>
        </div>
        <div className="home__container-title">
          <span className="home__title">Restaurants and cafes</span>
        </div>
        <div id="containerFiltrado" className="home__container-buttonsFilter">
          <ButtonFilter />
        </div>
        <section className="home__section-restaurant">
          {restaurants.map((rest) => (
            <div
              key={rest.id}
              onClick={(event) => handleClick( rest.id)}
              className="home__container-restaurant"
            >
              <div className="home__container-ImgRestaurant">
                <figure className="home__figure-restaurant">
                  <img
                    className="home__image-restaurant"
                    src={rest.imagenRestaurante}
                    alt={rest.nombre}
                  />
                </figure>
              </div>
              <div className="home__container-InfoRestaurant">
                <div className="home__container-nameRestaurant">
                  <span className="home__span-nameRestaurant">{rest.nombre}</span>
                </div>
                <div className="home__container-comentary">
                  <StarRating rating={rest.calificacion} />
                </div>
                <div className="home__container-workTime">
                  <span className="home__span-textworkTime">Work time</span>
                  <span className="home__span-workTime">{rest.abierto}</span>
                </div>
                <div className="home__container-before">
                  <span className="home__text-before">Before you</span>
                  <span className="home__before">${rest.precioDomicilio}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="home__container-layout">
          <LayoutHome />
        </div>
      </section>
    </>
  );
};

export default Home;

