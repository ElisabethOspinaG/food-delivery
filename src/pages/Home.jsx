import React from 'react';
import "../style/styleHome.scss";
import LayoutHome from '../components/layout/LayoutHome';
import location from '../assets/img/home/Location.svg';
import promToday from '../assets/img/home/promToday.svg';
import prom2 from '../assets/img/home/prom2.svg';
import starGray from '../assets/img/home/StarGray.svg';
import ButtonFilter from '../components/buttons/ButtonFilter';
import rest1 from '../assets/img/home/rest1.png';
import rest2 from '../assets/img/home/rest2.png';
import rest3 from '../assets/img/home/rest3.png';
import rest4 from '../assets/img/home/rest4.png';

// import { useDispatch, useSelector } from "react-redux";
// import { actionGetPaletasAsync } from "../redux/actions/actions";
// import FilterButtons from "./FilterButtons";

const Home = () => {

//   const dispatch = useDispatch();
//   const { paletas } = useSelector((store) => store.paletasStore);

//   useEffect(() => {
//     dispatch(actionGetPaletasAsync());
//   }, [dispatch]);
//   console.log(paletas);

    const restuarant = [
        {
            restaurantId: 1,
            name:'Pardes Restaurant',
            img: rest1,
            schedule: "09:30 - 23:00",
            before: 4,
            active: true,
            dish: [
                {
                    title: 'Breakfast Menu',
                    price: '$5',
                    description: 'ipso lorem o,rcjvjoc mcg,socg c,getjgc ciurg,,oñse',
                    image: "breakfastMenu",
                    type: 'fast food',
                    isSelected:false,
                    quantity:10,
                    totalPrice:'',
                    selectedDishId:'',
                    orderType:'',
                    ingredients: [
                        {
                            ingredientName: "tomate",
                            amount:"",
                            priceIngred: 1000,
                        },
                        {
                            ingredientName: "pepino",
                            amount:"",
                            priceIngred: 1000,
                        }
                    ]
                    
                    
                }
                

            ]
        },
        {
            restaurantId: 2,
            name:'Glamour Kafe',
            img: rest2,
            schedule: "09:00 - 21:00",
            before: 13,
            active: false,
            dish: [
                {
                    title: 'Breakfast Menu',
                    price: '$5',
                    description: 'ipso lorem o,rcjvjoc mcg,socg c,getjgc ciurg,,oñse',
                    image: "breakfastMenu",
                    type: 'pizza',
                    isSelected:false,
                    quantity:10,
                    totalPrice:'',
                    selectedDishId:'',
                    orderType:'',
                    ingredients: [
                        {
                            ingredientName: "tomate",
                            amount:"",
                            priceIngred: 1000,
                        },
                        {
                            ingredientName: "pepino",
                            amount:"",
                            priceIngred: 1000,
                        }
                    ]
                    
                    
                }
                

            ]
        },
        {
            restaurantId: 3,
            name:'Aromat Bakery',
            img: rest3,
            schedule: "09:00 - 22:00",
            before: 3,
            active: false,
            dish: [
                {
                    title: 'Breakfast Menu',
                    price: '$5',
                    description: 'ipso lorem o,rcjvjoc mcg,socg c,getjgc ciurg,,oñse',
                    image: "breakfastMenu",
                    type: 'fast food',
                    isSelected:false,
                    quantity:10,
                    totalPrice:'',
                    selectedDishId:'',
                    orderType:'',
                    ingredients: [
                        {
                            ingredientName: "tomate",
                            amount:"",
                            priceIngred: 1000,
                        },
                        {
                            ingredientName: "pepino",
                            amount:"",
                            priceIngred: 1000,
                        }
                    ]
                }
            ]
        },
        {
            restaurantId: 4,
            name:'Last night Restaurant & Kafe',
            img: rest4,
            schedule: "10:00 - 22:00",
            before: 5,
            active: false,
            dish: [
                {
                    title: 'Breakfast Menu',
                    price: '$5',
                    description: 'ipso lorem o,rcjvjoc mcg,socg c,getjgc ciurg,,oñse',
                    image: "breakfastMenu",
                    type: 'Sea food',
                    isSelected:false,
                    quantity:10,
                    totalPrice:'',
                    selectedDishId:'',
                    orderType:'',
                    ingredients: [
                        {
                            ingredientName: "tomate",
                            amount:"",
                            priceIngred: 1000,
                        },
                        {
                            ingredientName: "pepino",
                            amount:"",
                            priceIngred: 1000,
                        }
                    ]
                    
                    
                }
                

            ]
        }
    ]

  return (
    <>
        <section className='home'>
            <div className='home__container-location'> 
                <div className='home__img-location'>
                    <img src={location} alt="" />
                </div>
                <div className='home__container-textLocation'>
                    <span className='home__text-location'>DELIVER TO</span>
                    <span className='home__location'> 882 Well St, New-York</span>
                </div>
            </div>
            <div className='home__container-promotions'>
                <div className='home__promotions1'> 
                    <figure className='home__figurePromo1'>
                        <img src={promToday } alt="today" />
                    </figure>
                   
                </div>
                <div className='home__promotions2'> 
                    <figure className='home__figurePromo2'>
                        <img className='home__imgPromo2' src={prom2} alt="" />
                    </figure>
                </div>
            </div>
            <div className='home__container-title'>
                <span className='home__title'>Restaurants and cafes</span>
            </div>
            <div id= "containerFiltrado" className='home__container-buttonsFilter'> 
                <ButtonFilter/>
            </div>
            <section className='home__section-restaurant'>
                {restuarant.map((rest) =>(
                    <div 
                        key={rest.restaurantId}
                        className='home__container-restaurant'> 

                        <div className='home__container-ImgRestaurant'>
                            <figure className='home__figure-restaurant'>
                                <img src={rest.img} alt={rest.name} />
                            </figure>
                        </div>
                        <div className='home__container-InfoRestaurant'>
                            <div className='home__container-nameRestaurant' >
                                <span className='home__span-nameRestaurant'>{rest.name}</span>
                            </div>
                            <div className='home__container-comentary'>
                                <img src={starGray} alt="start" />
                                <img src={starGray} alt="start" />
                                <img src={starGray} alt="start" />
                                <img src={starGray} alt="start" />
                            </div>
                            <div className='home__container-workTime'> 
                                <span className='home__span-textworkTime'> Work time</span>
                                <span className='home__span-workTime'> {rest.schedule}</span>
                            </div>
                            <div className='home__container-before'>
                                <span className='home__text-before'>Before you</span>
                                <span className='home__before'>{rest.before}$</span>
                            </div>
                        </div>
                    </div>
                ))};
            </section>
            
           
            <div className='home__container-layout'> 
                <LayoutHome/>
            </div>
        </section>
        
    </>
  )
}

export default Home