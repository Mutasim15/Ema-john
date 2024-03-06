import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart}=props;
    // console.log(cart)
    let total=0;
    for(const product of cart){
     
        total=total+product.price;
       
    }
    const tax= total*7/100;
    let totalship =0;
   
    for(const ship of cart)
    {
       
        totalship=totalship+ship.shipping;
    }
    const grandTotal =total+ totalship+tax;
    return (
        <div className='cart'>
                 <h4>Order Summary :</h4>
                 <p>Selected Items:{cart.length} </p>
                 <p>Total Price:${total}</p>
                 <p>Total Shipping :${totalship} </p>
                 <p> Tax:${tax.toFixed(2)} </p>
                 <h6> Grand Total:{grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;