import React, { useState } from 'react'
import hamburguer from '../../assets/img/home/hamburguer.svg';
import pizza from '../../assets/img/home/pizza.svg';
import "./styleButtons.scss"
import { useDispatch, useSelector } from 'react-redux';
import { actionGetRestaurantAsync } from '../../redux/actions/restaurantsAcions';

const ButtonFilter = () => {

    // const [buttonCategory, setButtonCategory] = useState([]);
    const dispatch = useDispatch();
    const {restaurants} = useSelector((store)=> store.restaurantStore);
    

    useEffect(() => {
      console.log(restaurants)
        dispatch(actionGetRestaurantAsyncc());
        console.log(restaurants)
       
        }, [dispatch]);
    
    const category= [
        {
            id: 1,
            name:'All',
            img: "",
            active: true
        },
        {
            id: 2,
            name:'Fast Food',
            img: hamburguer,
            active: false
        },
        {
            id: 3,
            name:'Pizzas',
            img: pizza,
            active: false
        },
        {
            id: 4,
            name:'Sea food',
            img: pizza,
            active: false
        },
        {
            id: 5,
            name:'Mexica food',
            img: pizza,
            active: false
        },
        {
            id: 6,
            name:'Salad',
            img: pizza,
            active: false 
        },

       {
        id: 7,
            name:'Meats',
            img: pizza,
            active: false
       },
       {
            id: 8,
            name:'Coffee',
            img: pizza,
            active: false
       },
       {
            id: 9,
            name:'Drinks',
            img: pizza,
            active: false
       }
        
    ]   

    // const handleButtonClick = (item) => {
    //     buttonCategory = category; 
    //     const updatedCategory = category.map((element) => {
    //       if (element.id === item.id) {
    //         return { ...element, active: true };
    //       } else {
    //         return { ...element, active: false };
    //       }
    //     });
    //     setButtonCategory(updatedCategory);
    //   };
    
  return (
    <>
        {category.map((item) =>(
          <button
          className={`button__filter ${item.active ? 'button__filter-active' : ''}`}
          key={item.id}
        //   onClick={() => handleButtonClick(item)}
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