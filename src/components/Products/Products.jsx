import React from "react";

import Product from "./Product";

import { popularProducts } from "../../data/data";

import { Container } from "./Products.style";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
