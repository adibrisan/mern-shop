import React from "react";
import { Link } from "react-router-dom";

import { Container, Image, Info, Title, Button } from "./CategoryItem.style";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={`products/${item.cat}`}>
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
