import React from "react";

import { Container, Image, Info, Title, Button } from "./CategoryItem.style";

const CaegoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CaegoryItem;