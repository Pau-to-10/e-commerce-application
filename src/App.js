import { useEffect, useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';


// import Cart from "./components/Cart"

function App() {
//Products state
  const [products, setProducts] = useState([]);
//Fake API
  const url = "http://localhost:3001/products";

  const fetchProducts = async () => {
    let request = await fetch(url);

    if (request.ok) {
      let data = await request.json();
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])


  return (
    <>
    <NavBar />

    <div className='container mt-5 mb-5'>
      <ProductCard products={products} />
    </div>

    </>
  );
}

export default App;
