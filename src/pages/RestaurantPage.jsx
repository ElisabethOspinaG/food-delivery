import React, { useEffect, useState } from 'react';
import '../style/restaurantPage.scss';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetRestaurantAsync } from '../redux/actions/restaurantsAcions';
import { useParams } from 'react-router-dom';
import LayoutHome from '../components/layout/LayoutHome';
import { useNavigate } from "react-router-dom";
const RestaurantPage = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((store) => store.restaurantStore);
  console.log(restaurants);

  useEffect(() => {
    dispatch(actionGetRestaurantAsync());
  }, [dispatch]);

  const { id } = useParams();
  console.log(id);
  const restaurante = restaurants.find((restaurante) => restaurante.id === id);
  console.log(restaurante);
  const [selectedPlato, setSelectedPlato] = useState([]);
  const [selectedPlatoAll, setSelectedPlatoAll] = useState([]);
  const handleClickmeat = () => {
    const platosMeat = restaurante.platos.filter((plato) => plato.categoria.carnes);
    setSelectedPlato(platosMeat);
    console.log(selectedPlato);
    setSelectedPlatoAll([]); // Reiniciar selectedPlatoAll cuando se selecciona la categoría de carnes
  };

  const handleClickall = () => {
    setSelectedPlato([]);
    setSelectedPlatoAll(restaurante.platos);
    setShowAllPlatos(true);
  };


  const [showAllPlatos, setShowAllPlatos] = useState(true);

  useEffect(() => {
    setShowAllPlatos(true);
  }, []);
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
          <FaStar key={index} style={{ color: getStarColor(index) }} />
        ))}
      </div>
    );
  };
  const navigate = useNavigate();
  const handleMostrarPlato = ( id) => {
    console.log('Clicked Restaurant ID:', id);
    navigate(`/dish/${id}`);
  };
  if (!restaurante) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="container">
          <button className="container__button">&lt; &nbsp;&nbsp;</button>
        </div>

        <img
          className="container__logo"
          src={restaurante.logoRestaurante}
          alt={restaurante.nombre}
        />
        <img className="container__logo2" src={restaurante.slogan} alt="Slogan" />
        <figure className="container__figure">
          <img className="container__image" src={restaurante.imagenRestaurante} alt="" />
        </figure>
        <section className="container__section">
          <h1>{restaurante.nombre}</h1>
          <h2 id="parrafo">
            {restaurante.descripcion}
            {restaurante.duracionDomicilio}
          </h2>
        </section>
        <div id="duracion">
          <h2>{restaurante.duracionDomicilio}</h2>
        </div>

        <div id="rating">
          <StarRating rating={restaurante.calificacion} />
        </div>
        <div className="container__buttons1">
          <div className="container__buttons">
            <button id="button" onClick={handleClickall}>
              All
            </button>
            <button id="button2">Coffee</button>
            <button id="button3">Drinks</button>
            <button id="button4" onClick={handleClickmeat}>
              Meats
            </button>
          </div>
        </div>

        <div className="container__map">
          {showAllPlatos && (
            <div className="column" style={{ display: selectedPlatoAll.length === 0 ? 'none' : 'grid' }}>
              {selectedPlatoAll.slice(0, 3).map((plato) => (
                <div key={plato.id} onClick={handleMostrarPlato}>
                  <img src={plato.imagenPlato} alt={plato.nombrePlato} />
                  <h3>{plato.nombrePlato}</h3>
                  <p>$ {plato.precioPlato}</p>
                </div>
              ))}
            </div>
          )}
          {showAllPlatos && (
            <div className="column" style={{ display: selectedPlatoAll.length === 0 ? 'none' : 'grid' }}>
              {selectedPlatoAll.slice(3, 6).map((plato) => (
                <div key={plato.id}  onClick={handleMostrarPlato}>
                  <img src={plato.imagenPlato} alt={plato.nombrePlato} />
                  <h3>{plato.nombrePlato}</h3>
                  <p>$ {plato.precioPlato}</p>
                </div>
              ))}
            </div>
          )}
          {!showAllPlatos && (
            <div className="column" style={{ display: selectedPlato.length === 0 ? 'none' : 'grid' }}>
              {selectedPlato.slice(0, 3).map((plato) => (
                <div key={plato.id}  onClick={handleMostrarPlato}>
                  <img src={plato.imagenPlato} alt={plato.nombrePlato} />
                  <h3>{plato.nombrePlato}</h3>
                  <p>$ {plato.precioPlato}</p>
                </div>
              ))}
            </div>
          )}
          {!showAllPlatos && (
            <div className="column" style={{ display: selectedPlato.length === 0 ? 'none' : 'grid' }}>
              {selectedPlato.slice(3, 6).map((plato) => (
                <div key={plato.id} onClick={handleMostrarPlato}>
                  <img src={plato.imagenPlato} alt={plato.nombrePlato} />
                  <h3>{plato.nombrePlato}</h3>
                  <p>$ {plato.precioPlato}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <LayoutHome />
      </div>
    );
  }
};

export default RestaurantPage;
