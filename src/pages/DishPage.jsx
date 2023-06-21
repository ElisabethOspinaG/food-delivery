import React from 'react'
import "../style/styleDishPlate.scss";
import { FaClock } from 'react-icons/fa';

const DishPage = () => {
  return (
    <div className='dish'>
        <img></img>
        <h1></h1>
        <h2></h2>
        <div className='dish__clock'>
            <FaClock></FaClock><h3></h3></div>
        <span className='dish__ingredients'>Aditional Ingredients</span>
        <label className='dish__div' id="label">
   <input type="checkbox" id="tarea1" ></input>
  tarea        
        </label>    <span className='dish__price'id="price" for="tarea1">+ 15 $</span>
        <label className='dish__div' id="label2" >
   <input type="checkbox"  ></input>
  tarea        
        </label>
        <span className='dish__price'id="price2" fo4>+ 15 $</span>


    <button className='dish__button' id="button2"></button>
    <button className='dish__button' id='button'>Add </button>
    </div>
  )
}

export default DishPage