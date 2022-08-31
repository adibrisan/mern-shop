import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";

import { userRequest } from "../../api";
import { addProduct } from "../../store/cartSlice";

import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import {
  Wrapper,
  ImgContainer,
  InfoContainer,
  Title,
  Description,
  Image,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Button,
  Amount,
} from "./Product.style";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get("/products/find/" + productId);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [productId]);

  const handleQuantity = (action) => {
    if (action === "dec" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else if (action === "inc") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleAddProduct = () => {
    dispatch(addProduct({ ...product, quantity, color, size })); //or product: product,quantity:quantity
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} alt="product_item_image" />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((itemColor, index) => (
                <FilterColor
                  key={index}
                  color={itemColor}
                  onClick={() => setColor(itemColor)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((itemSize, index) => (
                  <FilterSizeOption key={index}>{itemSize}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <IoMdRemoveCircle
                size={22}
                onClick={() => handleQuantity("dec")}
              />
              <Amount>{quantity}</Amount>
              <IoMdAddCircle size={22} onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleAddProduct}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
