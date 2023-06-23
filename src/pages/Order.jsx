import React from 'react'
import "../style/orderStyle.scss"
import { detectarDiaYHora } from "../functions/clock";
import LayoutHome from '../components/layout/LayoutHome';
const Order = () => {
    const fechaFormateada = detectarDiaYHora();
    console.log(fechaFormateada);
    return (

        <div className='orderContainer'>
            <button className='orderContainer__button'></button>
            <h1 className='orderContainer__h1'>{fechaFormateada}</h1>
            <section className='orderContainer__flex'>
                  <div className='orderContainer__div'>
                <div className='orderContainer__div2'>
                    <section className='orderContainer__texto'>
                       <h1 className=''>este texto </h1>
                    <h2>otro</h2>  
                    </section>
                   <h3>y otro</h3>
                </div>
            
              
            <div className='orderContainer__section'>
                <section className='orderContainer__production'><h1>Production Cost</h1>
                <h2>esto</h2></section>
                <section className='orderContainer__production'><h1>Cost of Delivery</h1>
                <h2>esto</h2></section>
                <div className='row'></div>
                <section className='orderContainer__total' >
                    <h1>Total</h1>
                    <h2></h2>
                </section>
                <LayoutHome></LayoutHome>
                
            </div>
            </div>
            </section>
          
        </div>
    )
}

export default Order