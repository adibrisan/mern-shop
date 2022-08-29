import React from "react";
import { useNavigate } from "react-router-dom";

import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHeart,
} from "react-icons/ai";
import { Container, Circle, Image, Info, Icon } from "./Product.style";

const Product = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <AiOutlineShoppingCart />
        </Icon>
        <Icon>
          <AiOutlineSearch
            onClick={() =>
              navigate(`../product/${item._id}`, { replace: true })
            }
          />
        </Icon>
        <Icon>
          <AiOutlineHeart />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
