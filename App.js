import React,{useState} from 'react';
import data from './components/back/Data';
import Header from './components/front/Header/Header';
import {BrowserRouter as Router} from "react-router-dom";
import Switch from './components/front/Routes/Switch';



function App() {
  
  const {products} = data;
  const [cartItems,setcartItems] = useState([]);
  
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setcartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist,quantity: ProductExist.quantity +1}: item))
    }
    else{
      setcartItems([...cartItems,{...products,quantity: 1}]);
    }
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setcartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else{
      setcartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist,quantity: ProductExist.quantity -1} :item))
    }
  }

  const handleCartClear = () => {
    setcartItems([]);
  }
  
  return (
    <div>
      <Router>
         <Header cartItems={cartItems}/>
        <Switch 
         products = {products} 
         cartItems = {cartItems} 
         handleAddProduct={handleAddProduct}
         handleRemoveProduct={handleRemoveProduct}
         handleCartClear={handleCartClear}/>
      </Router>
    </div>
  )
}

export default App