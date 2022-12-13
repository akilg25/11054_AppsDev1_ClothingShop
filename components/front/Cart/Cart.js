import React from 'react'

const Cart = (cartItems,handleAddProduct,handleRemoveProduct,handleCartClear) => {

    const totalPrice = cartItems.reduce((price,item) => price + item.quantity * item.price,0);

  return (
    <div className='cart_items'>
        <h1 className='cart_items_header'>Cart Items</h1>
        <div className='clear_cart'>
            {cartItems.length >= 1 && (
                <button className='clear_cart_btn' onClick={handleCartClear}>Clear Cart</button>
            )}
        </div>
        {cartItems.length === 0 && 
        <div className='cart_items_empty'>No items in cart</div>}
        <div>
            {cartItems.map((item) => (
                <div key={item.id} className='cart_items_list'> 
                     <img src={item.image} alt={item.name}/>
                     <div className='cart_items_name'>{item.name}</div>
                     <div className='cart_items_function'>
                        <button className='cart_items_add' onClick={handleAddProduct(item)}>+</button>
                        <button className='cart_items_remove' onClick={handleRemoveProduct(item)}>-</button>
                     </div>
                     <div className='cart_items_price'>
                        {item.quantity} * ${item.price}
                     </div>
                </div>
            ))}
        </div>
        <div className='cart_items_total_price_name'>
            Total Price
            <div className='cart_items_total_price'> ${totalPrice}</div>
        </div>
    </div>
  )
}

export default Cart