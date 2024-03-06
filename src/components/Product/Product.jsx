import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const {price,img,name,seller,ratings}=props.product;
    const handleAddtoCart=props.handleAddtoCart;
    // console.log(handleAddtoCart)
    // const handleAddtoCart=(product)=>{
    //     console.log(product);
    // }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product_info'>
            <h6 className='product_name'>{name}</h6>
            <p className='product_price'>Price:${price}</p>
            <p>Manufecturer :{seller}</p>
            <p>Rating:{ratings} start</p>
            </div>
            <button onClick={()=>handleAddtoCart(props.product)} className='btn_cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;