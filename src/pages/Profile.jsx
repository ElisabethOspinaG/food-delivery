import React from 'react';
import "../style/styleProfile.scss";
import acount from "../assets/img/profile/Account.svg";
import alarm from "../assets/img/profile/Alarm.svg";
import coin from "../assets/img/profile/Coin.svg";
import language from "../assets/img/profile/language.svg";
import location from "../assets/img/profile/Location.svg";
import faq from "../assets/img/profile/FAQ.svg";
import call from "../assets/img/profile/Call.svg";
import rectangle from "../assets/img/profile/Rectangle 357.svg";
import next from "../assets/img/profile/Next.svg";
import LayoutHome from '../components/layout/LayoutHome';
import useOnClick from '../functions/useOnClick';

const Profile = () => {

    const handleClick = useOnClick();

    const ButtonsProfile= [
        {
            idButtonProfile: 1,
            name: "Account edit",
            icon:acount,
            path:'acountEdit',
            switcher: next,

        },
        {
            idButtonProfile: 2,
            name: "Account edit",
            icon: alarm,
            path:'acountEdit',
            switcher: rectangle,

        },
        {
            idButtonProfile: 3,
            name: "Payment",
            icon: coin,
            path:'payment',
            switcher: next,

        },
        {
            idButtonProfile: 4,
            name: "Language",
            icon: language,
            path:'languaje',
            switcher: "Eng",

        },
        {
            idButtonProfile: 5,
            name: "Location",
            icon: location,
            path:'location',
            switcher: next,

        },
        {
            idButtonProfile: 6,
            name: "FAQ",
            icon: faq,
            path:'faq',
            switcher: next,

        },
        {
            idButtonProfile: 7,
            name: "Suport",
            icon: call,
            path:'support',
            switcher: next,

        },
    ]
  return (
    <>
        <section className='profile'>
            <div className='profile__container-user'>
                <figure className='profile__figure-imgUser'>
                    <img src=""/>
                </figure>
                <h1 className='profile__name'>Jenny Wilson</h1>
            </div>
            <div className='profile__container-button'>
                {ButtonsProfile.map((item)=>(
                    <button 
                    key={item.id}
                    className='profile__button'
                    onClick={()=>handleClick(item.path)}
                    >
                        <img src={item.icon} alt={item.path} />
                        <span className='profile__button-name'>{item.name}</span>
                        <img src={item.switcher} alt={item.path} />
                    </button>
                )) 
                }
            </div>
            <div className='profile__container-layout'>
                <LayoutHome/>
            </div>

        </section>
    </>
  )
}

export default Profile