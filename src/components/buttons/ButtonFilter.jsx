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
        name:'Pizzas',
        img: pizza,
        active: false
    },
    {
        value: 3,
        name:'Sea food',
        img: pizza,
        active: false
    },
    {
        value: 4,
        name:'Mexica food',
        img: pizza,
        active: false
    },
    {
        value: 5,
        name:'Salad',
        img: pizza,
        active: false 
    },

   {
        value: 6,
        name:'Meats',
        img: pizza,
        active: false
   },
   {
        value: 7,
        name:'Coffee',
        img: pizza,
        active: false
   },
   {
        value: 8,
        name:'Drinks',
        img: pizza,
        active: false
   }
    
]
  const dispatch = useDispatch();
  const onFiltered = (searchValue) => {
    const searchParam = "category";
    dispatch(actionFilterRestaurantAsync(searchParam, searchValue));
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
        {category.map((item) =>(
          <button
          className={`button__filter ${item.active ? 'button__filter-active' : ''}`}
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