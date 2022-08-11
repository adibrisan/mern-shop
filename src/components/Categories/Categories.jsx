import React from "react";

import CaegoryItem from "./CaegoryItem";

import { Container } from "./Categories.style";

import { categories } from "../../data/data";

const Categories = () => {
  return (
    <Container>
      {categories.map((item, index) => (
        <CaegoryItem key={index} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
