import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
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

        // console.log(product);
        const newCart =[...cart,product];
        // let newCart=[];
        // const exists= cart.find(pd=>pd.id===product.id)
        // if(!exists){
        //     product.quantity=1;
        //     newCart=[...cart,product]
        // }
        // else{
        //     exists.quantity = exists.quantity+1;
        //     const remaining =cart.filter(pd=>pd.id !==product.id)
        //     newCart=[...remaining, exists]
        // }
        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart=()=>{
       setCart([]);
       deleteShoppingCart();
       
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
                   <Cart 
                   cart={cart}
                   handleClearCart={handleClearCart}
                   >
                     <Link to="/orders">
                        <button className='review_order'>Review Order</button>
                     </Link>
                    <div  >From Shop</div>
                   </Cart>
            </div>
           </div>
        </div>
    );
};

export default Shop;