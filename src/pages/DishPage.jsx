import React from 'react'
import "../style/styleDishPlate.scss";
import { FaClock } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetRestaurantAsync } from '../redux/actions/restaurantsAcions';

import LayoutHome from '../components/layout/LayoutHome';
import { useNavigate } from "react-router-dom";
import { restaurantsTypes } from '../redux/types/restaurantsTypes';

const DishPage = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((store) => store.restaurantStore);
  console.log(restaurants);

  useEffect(() => {
    dispatch(actionGetRestaurantAsync());
  }, [dispatch]);

  const {nombrePlato } = useParams();
  console.log(nombrePlato);
  let ingredientesAdicionales = [];

  if (restaurants && restaurants.length > 0) {
    const restaurante = restaurants.find((restaurante) => {
      return restaurante.platos.find((plato) => plato.nombrePlato === nombrePlato);
    });
  
    if (restaurante) {
      ingredientesAdicionales = restaurante.adicionales;
      console.log(restaurante);
    } else {
      console.log(`No se encontró el restaurante para el plato '${nombrePlato}'.`);
    }
  } else {
    console.log(`No hay restaurantes disponibles.`);
  }

if (ingredientesAdicionales.length > 2) {
  ingredientesAdicionales.forEach((ingrediente, index) => {
    const labelId = `label${index + 1}`;
    const priceId = `price${index + 1}`;

    const labelElement = document.createElement('label');
    labelElement.className = 'dish__div';
    labelElement.id = labelId;

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.id = `tarea${index + 1}`;

    const ingredientText = document.createTextNode(ingrediente.nombreIngrediente);
    labelElement.appendChild(checkboxElement);
    labelElement.appendChild(ingredientText);

    const priceElement = document.createElement('span');
    priceElement.className = 'dish__price';
    priceElement.id = priceId;
    priceElement.htmlFor = `tarea${index + 1}`;
    priceElement.textContent = `+ ${ingrediente.precioIngrediente} $`;

    // Agregar los elementos al contenedor principal
    const containerElement = document.querySelector('dish__section'); // Reemplaza 'container' con el ID del contenedor principal donde quieres agregar los ingredientes
    containerElement.appendChild(labelElement);
    containerElement.appendChild(priceElement);
  });
  
  const navigate = useNavigate();
  const handleClickAdd = ( ) => {
 
    navigate("/order");
}


  return (
    <div className='dish'>
        <img></img>
        <h1></h1>
        <h2></h2>
        <div className='dish__clock'>
            <FaClock></FaClock><h3></h3></div>
        <span className='dish__ingredients'>Aditional Ingredients</span>
        <section className='dish__section'></section>
        <label className='dish__div' id="label">
   <input type="checkbox" id="tarea1" ></input>
   {restaurante.adicionales[0].ingrediente} 
        </label>    <span className='dish__price'id="price" for="tarea1">+ 15 $</span>
        <label className='dish__div' id="label2" >
   <input type="checkbox"  ></input>
   {restaurante.adicionales[0]}     
        </label>
        <span className='dish__price'id="price2" fo4>+ 15 $</span>


    <button className='dish__button' id="button2"></button>
    <button className='dish__button' id='button'onClick={handleClickAdd}>Add </button>
    <LayoutHome></LayoutHome>
    </div>
  )
}}

export default DishPage