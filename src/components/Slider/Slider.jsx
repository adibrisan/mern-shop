import React, { useState } from "react";

import { sliderItems } from "../../data/data";

import {
  Arrow,
  Button,
  Container,
  Description,
  ImgContainer,
  Image,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from "./Slider.style";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <HiArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, index) => (
          <Slide key={index} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <HiArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
