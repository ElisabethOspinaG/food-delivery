import React, { useEffect, useState } from 'react'
import hamburguer from '../../assets/img/home/hamburguer.svg';
import pizza from '../../assets/img/home/pizza.svg';
import "./styleButtons.scss"
import { useDispatch } from 'react-redux';
import { actionFilterRestaurantAsync, actionGetRestaurantAsync } from '../../redux/actions/restaurantsAcions';

const ButtonFilter = () => {
  
  const category= [
   
    {
        value: 1,
        name:'Fast Food',
        img: hamburguer,
        active: false
    },
    {
      value: 2,
        name:'pizza',
        img: pizza,
        active: false
    },
    {
        value: 3,
        name:'dessert',
        img: pizza,
        active: false
    },
    {
        value: 4,
        name:'international',
        img: pizza,
        active: false
    },
    {
        value: 5,
        name:'salad',
        img: pizza,
        active: false 
    },

   {
        value: 6,
        name:'meats',
        img: pizza,
        active: false
   },
   {
        value: 7,
        name:'coffee',
        img: pizza,
        active: false
   },
   {
        value: 8,
        name:'drink',
        img: pizza,
        active: false
   }
    
]
  const dispatch = useDispatch();
  const onFiltered = (searchValue) => {
    // const searchParam = "category";
    dispatch(actionFilterRestaurantAsync(searchValue));
  };
    
  return (
    <>
        <button
            className= "button__filter"
            onClick={() => {
              dispatch(actionGetRestaurantAsync());
            }}
        >
          <span className='button__text' >
                Todas
            </span>
        </button>
        {
        category.map((item) =>(
          <button
          className={`button_filter ${item.active ? 'button_filter-active' : ''}`}
          key={item.value}
          onClick={() => {
            onFiltered(item.name);
          }}
          >
            <figure className='button__figure'>
            <img src={item.img} alt="" />
            </figure>
            <span className='button__text' >
                {item.name}
            </span>
          </button>
        ))}

    </>
  )
}

export default ButtonFilter