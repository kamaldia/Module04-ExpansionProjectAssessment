import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card.js';

const Products = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/product/`
        );
        if (response.status != 200) {
          throw new Error("Network response was not ok");
        }
        const data = response.data;
        setProducts(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProducts(null);
      }
    };
    fetchProducts();
  }, [])

  return (
    <>
      <Card />
    </>
  )
}

export default Products;