import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://images.pexels.com/photos/4210857/pexels-photo-4210857.jpeg',
      name: 'Blue Jeans',
      category: 'Jeans',
      seller: 'H&M',
      price: 2599
    },
    {
      url: 'https://media.istockphoto.com/id/1263030340/photo/yellow-knit-cap-isolated-on-white.jpg?s=612x612&w=0&k=20&c=1c9f765D1JNT4sejLyhaYe4h-bWpO3QRKdZCXGlQsGw=',
      name: 'Yellow Beanie',
      category: 'Beanie',
      seller: 'Guess',
      price: 50000
    },
    {
      url: 'https://media.istockphoto.com/id/685710150/photo/white-t-shirt-clothes.jpg?s=612x612&w=0&k=20&c=59C5ENyCUhZkkU5xn4gcKe59LiWSsAyaGOEpMh6zECU=',
      name: 'White Plain Shirt',
      category: 'Shirt',
      seller: 'Levis',
      price: 4000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;
