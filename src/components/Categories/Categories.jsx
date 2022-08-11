import React from "react";

import CaegoryItem from "./CaegoryItem";

import { Container } from "./Categories.style";

import { categories } from "../../data/data";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CaegoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
