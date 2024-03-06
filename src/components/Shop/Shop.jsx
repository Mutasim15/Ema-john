import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        // fetch('products.json')
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
     
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart=[]
        // step 1: get id of added product
        for(const id in storedCart)
        {
            // get product from products state by using id
            const addedProduct = products.find(product=>product.id===id)
            // console.log('addedProduct ',addedProduct)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity=quantity;
                // add the added product to the saved cart
                savedCart.push(addedProduct);
               
            }
            console.log('added Product',addedProduct)

        }

        // step 5: set the cart
        setCart(savedCart);

    },[products])
   
    const handleAddtoCart=(product)=>{
        console.log(product);
        const newCart =[...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div>
            {/* <h2>Products Coming Here : {products.length}</h2> */}
           <div className="shop_container">
           
            <div className="products_container">
            {/* <h2>Products Coming Here : {products.length}</h2> */}
                    {
                        products.map(product=><Product
                             key={product.id}
                            product={product}
                            handleAddtoCart={handleAddtoCart}
                        
                        ></Product>)
                    }
            </div>
            <div className="cart_container">
                   <Cart cart={cart}></Cart>
            </div>
           </div>
        </div>
    );
};

export default Shop;