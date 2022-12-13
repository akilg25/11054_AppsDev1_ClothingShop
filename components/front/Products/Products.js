import React from 'react';
import "./Products.css";

const Products = ({products,handleAddProduct}) => {
  return (
    <div className='products'>
        {products.map((products) => (
            <div className='card'>
                
                <div>
                <img 
                 className='product_img' 
                 src={products.image} 
                 alt={products.name}
                 />
                </div>
                
                <div>
                  <h1 className='product_name'>{products.name}</h1>
                </div>
                
                <div className='product_price'>{products.price}</div>
                
                <div>
                  <button className='add_to_cart_btn' onClick={() => handleAddProduct(products)}>Add to Cart</button>
                </div>
            </div>
         ))}
    </div>
  )
}

export default Products