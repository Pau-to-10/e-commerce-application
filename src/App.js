import { useEffect, useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';

import products from "./assets/db/products.json";
import Cart from "./components/Cart";

function App() {

  const [characters, setCharacters] = useState([]);

  const inititalUrl = "https://rickandmortyapi.com/api/character";

  const fetchProducts = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchProducts(inititalUrl);
  }, [])


  return (
    <>
    <NavBar />

    <div className='container mt-5'>
      <ProductCard characters={characters} />
    </div>

    </>
  );
}

export default App;
