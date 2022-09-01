import React, { useEffect, useState } from "react";

import Product from "./Product";

import axiosInstance from "../../api";

import { Container } from "./Products.style";

const Products = ({ category, filterProducts, sortProducts }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axiosInstance.get(
          category ? `products?category=${category}` : "products/"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    if (category) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filterProducts).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [category, products, filterProducts]);

  useEffect(() => {
    if (sortProducts === "newest") {
      setFilteredProducts((prevFilter) =>
        [...prevFilter].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sortProducts === "asc") {
      setFilteredProducts((prevFilter) =>
        [...prevFilter].sort((a, b) => a.price - b.price)
      );
    } else if (sortProducts === "desc") {
      setFilteredProducts((prevFilter) =>
        [...prevFilter].sort((a, b) => b.price - a.price)
      );
    }
  }, [sortProducts]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product key={item._id} item={item} />)
        : products
            .slice(0, 8)
            .map((item) => <Product key={item._id} item={item} />)}
    </Container>
  );
};

export default Products;
