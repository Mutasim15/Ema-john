import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Order = () => {
    const savedCart= useLoaderData();
    const [cart,setCart]=useState(savedCart)

    const handleRemoveFromCart = (id)=>{
        console.log(id);
        const remaining = cart.filter(product => product.id !== id)
        console.log(remaining)
        setCart(remaining)
        removeFromDb(id)
        // setCart(remaining);
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    // console.log(savedCart);
    return (
        <div className='shop_container'>
           <div className='review_container'>
               {

                 cart.map(product=> <ReviewItem 
                 key={product.id}
                 product={product}
                 handleRemoveFromCart={handleRemoveFromCart}
                 ></ReviewItem>)
               }
           </div>
           <div className='cart_container'>
                 <Cart
                 
                 cart={cart}
                 handleClearCart={handleClearCart}
               >
                <div>From Order</div>
               </Cart>
           </div>

        </div>
    );
};

export default Order;