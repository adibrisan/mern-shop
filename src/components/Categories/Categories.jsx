import React from "react";

import CategoryItem from "./CategoryItem";

import { Container } from "./Categories.style";

import { categories } from "../../data/data";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
