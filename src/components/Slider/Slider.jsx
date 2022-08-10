import React from "react";

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
  return (
    <Container>
      <Arrow direction="left">
        <HiArrowLeft />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://img.freepik.com/free-photo/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.jpg?w=2000&t=st=1660139361~exp=1660139961~hmac=9df9bf3d78e7e1858078394649f465f4811da407235d0608959b0e0f4e360684" />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sales</Title>
            <Description>
              Don't COMPROMISE ON STYLE ! GET FLAT 30% OFF our NEW ARRIVALS.
            </Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://img.freepik.com/free-photo/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.jpg?w=2000&t=st=1660139361~exp=1660139961~hmac=9df9bf3d78e7e1858078394649f465f4811da407235d0608959b0e0f4e360684" />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sales</Title>
            <Description>
              Don't COMPROMISE ON STYLE ! GET FLAT 30% OFF our NEW ARRIVALS.
            </Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <HiArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
