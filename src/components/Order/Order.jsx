import React from 'react'
import "../../style/order.scss"


const Order = () => {
    return (
        <div className='order'>

            <h1 className="order__title">Order</h1>
            <button className="order__button">&lt; &nbsp;&nbsp;</button>

            <div className="order__deliver">
                <h1 id="deliver">Deliver To</h1>
                <img src='https://i.ibb.co/GWMDDtQ/Vector.png'></img>
                <button className="order__button2" id="boton">&lt; &nbsp;&nbsp;</button>
                <h2 className='order__text' id="ubicacion">882 Well St, New-York</h2>
                <h1 id="payment">Payment</h1>
            </div>
            <div className='order__containerButton'>

                <div className='order__Button'>
                    <button>Cash</button>
                    <button className="">
                        <span>
                            <img src="https://i.ibb.co/LrKTsvy/Png.png" alt="example" /> 2344.... 4589
                        </span>
                    </button>
                    <button>
                        <span>
                            <img src="https://i.ibb.co/9WJCGfV/Png2.png" alt="example" /> exaple........
                        </span>
                    </button>
                </div>

            </div>
<section className='order__section'  id="order">
    <img></img>
    <h1></h1>
    <h2></h2>
</section>
<section className='order__section'  id="order1">
    <img></img>
    <h1></h1>
    <h2></h2>
</section>
<h1 id="note" >Note</h1>
<input id="imput" placeholder='write something...'></input>
<div className='order__products' id="products">
    <h1>Products</h1>
    <h1>2.55</h1>
</div>
<div className='order__products' id="delivery">
   <h1>Delivery</h1> 
   <h1>2.44</h1>
</div>
<div className="order__hr"></div>

<div className='order__total' >
   <h1>Total</h1> 
   <h2>2.44</h2>
</div>
<button id="orderbutton">Order</button>
        </div>
    )
}

export default Order