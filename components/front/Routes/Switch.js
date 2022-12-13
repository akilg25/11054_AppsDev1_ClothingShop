import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Switch = ({products,cartItems,handleAddProduct,handleRemoveProduct,handleCartClear}) => {
    return <div>
            <Routes>
                <Route path='/' exact>
                    <Products products={products} handleAddProduct={handleAddProduct}/>
                </Route>
                <Products />
                <Route path='/cart' exact>
                    <Cart 
                    cartItems = {cartItems} 
                    handleAddProduct={handleAddProduct} 
                    handleRemoveProduct={handleRemoveProduct}
                    handleCartClear={handleCartClear}/>
                </Route>
            </Routes>
   </div>
};

export default Switch