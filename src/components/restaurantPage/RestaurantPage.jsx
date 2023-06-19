import React from 'react';
import "../../style/restaurantPage.scss";
import { FaStar } from 'react-icons/fa';

const RestaurantPage = () => {
  const rating = 1;
  console.log(rating);

  const StarRating = ({ rating }) => {
    const getStarColor = (starIndex) => {
      if (starIndex < rating) {
        return '#FFD700'; // Estilo para estrellas seleccionadas (color dorado)
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

  return (
    <div>
      <div className='container'>
        <button className="container__button">&lt; &nbsp;&nbsp;</button>
      </div>
      <img className="container__logo"></img>
      <img className="container__logo2"src="https://th.bing.com/th/id/R.c22277a451f43346b2ab3fb59ceadf3c?rik=prmM3D5YO7VFRQ&pid=ImgRaw&r=0"></img>
      <figure className='container__figure'>
        <img className='container__image' src="https://th.bing.com/th/id/R.c22277a451f43346b2ab3fb59ceadf3c?rik=prmM3D5YO7VFRQ&pid=ImgRaw&r=0"></img>
      </figure>

      <h1></h1>
      <h2 id="parrafo"></h2>
      <h2 id="duracion"></h2>
      <button id="button">Salad</button>
      <button id="button2">Coffee</button>
      <button id="button3">Drinks</button>
      <button id="button4">Meats</button>

      <div>
        <StarRating rating={rating} />
      </div>
<div className='container__container' id="container1">
<img className="container__dish" src="https://th.bing.com/th/id/R.c22277a451f43346b2ab3fb59ceadf3c?rik=prmM3D5YO7VFRQ&pid=ImgRaw&r=0"></img>
</div>
      
      <img className="container__dish" src="https://th.bing.com/th/id/R.c22277a451f43346b2ab3fb59ceadf3c?rik=prmM3D5YO7VFRQ&pid=ImgRaw&r=0"></img>
      <img className="container__dish" src="https://th.bing.com/th/id/R.c22277a451f43346b2ab3fb59ceadf3c?rik=prmM3D5YO7VFRQ&pid=ImgRaw&r=0"></img>
      <img className="container__dish" src="https://th.bing.com/th/id/R.c22277a451f43346b2ab3fb59ceadf3c?rik=prmM3D5YO7VFRQ&pid=ImgRaw&r=0"></img>
      <img className="container__dish" src="https://th.bing.com/th/id/R.c22277a451f43346b2ab3fb59ceadf3c?rik=prmM3D5YO7VFRQ&pid=ImgRaw&r=0"></img>
      <img className="container__dish" src="https://th.bing.com/th/id/R.c22277a451f43346b2ab3fb59ceadf3c?rik=prmM3D5YO7VFRQ&pid=ImgRaw&r=0"></img>
    </div>
  );
};

export default RestaurantPage;
