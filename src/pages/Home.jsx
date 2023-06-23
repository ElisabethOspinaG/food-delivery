import React, { useEffect } from 'react';
import "../style/styleHome.scss";
import LayoutHome from '../components/layout/LayoutHome';
import location from '../assets/img/home/Location.svg';
import promToday from '../assets/img/home/promToday.svg';
import prom2 from '../assets/img/home/prom2.svg';
import starGray from '../assets/img/home/StarGray.svg';
import ButtonFilter from '../components/buttons/ButtonFilter';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetRestaurantAsync } from '../redux/actions/restaurantsAcions';

const Home = () => {
    const dispatch = useDispatch();
    const { restaurants } = useSelector((store) => store.restaurantStore);

    useEffect(() => {
        dispatch(actionGetRestaurantAsync());
    }, [dispatch]);

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
                            <img src={promToday} alt="today" />
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
                <div id="containerFiltrado" className='home__container-buttonsFilter'>
                    <ButtonFilter />
                </div>
                <section className='home__section-restaurant'>
                    {restaurants && restaurants.length ? (
                        restaurants.map((restaurant, index) => (
                            <div
                                key={index}
                                className='home__container-restaurant'>

                                <div className='home__container-ImgRestaurant'>
                                    <figure className='home__figure-restaurant'>
                                        <img src={restaurant.imagenRestaurante} alt={restaurant.nombre} />
                                    </figure>
                                </div>
                                <div className='home__container-InfoRestaurant'>
                                    <div className='home__container-nameRestaurant'>
                                        <span className='home__span-nameRestaurant'>{restaurant.nombre}</span>
                                    </div>
                                    <div className='home__container-comentary'>
                                        <img src={starGray} alt="start" />
                                        <img src={starGray} alt="start" />
                                        <img src={starGray} alt="start" />
                                        <img src={starGray} alt="start" />
                                    </div>
                                    <div className='home__container-workTime'>
                                        <span className='home__span-textworkTime'> Work time</span>
                                        <span className='home__span-workTime'> {restaurant.abierto}</span>
                                    </div>
                                    <div className='home__container-before'>
                                        <span className='home__text-before'>Before you</span>
                                        <span className='home__before'>{restaurant.precioDomicilio}$</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : null}
                </section>
                <div className='home__container-layout'>
                    <LayoutHome />
                </div>
            </section>
        </>
    );
};

export default Home;
