import React from 'react';
import './ReviewItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt  } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({product,handleRemoveFromCart}) => {

    const {id,quantity,img,name,price}=product
    return (
        <div className='review_item'>
           
            <img src={img} alt="" />
          
                <div className="review_details">
                <p className='product_title'> {name} </p>
                <p> Price: <span className='orange_text'> ${price} </span></p>
                <p> Order Quantity: <span className='orange_text'> {quantity} </span></p>
                </div>
                <button onClick={() => handleRemoveFromCart(id)}   className='btn_delete'> <FontAwesomeIcon icon={faTrashAlt} /></button>
        
           </div>
     
    );
};

export default ReviewItem;