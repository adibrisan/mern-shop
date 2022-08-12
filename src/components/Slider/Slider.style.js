import styled from "styled-components";

import { MediaQueries } from "../../environment/theme/sizes";
import { Colors } from "../../environment/theme/Colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${Colors.white};
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${Colors.ebb};
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};

  @media ${MediaQueries.phone} {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;

  @media ${MediaQueries.phone} {
    flex: 0;
    max-height: 50%;
  }
`;

export const Image = styled.img`
  height: 80%;

  @media ${MediaQueries.touchSmall} {
    max-width: 25rem;
    max-height: 25rem;
  }

  @media ${MediaQueries.touch} {
    max-width: 30rem;
    max-height: 30rem;
  }

  @media ${MediaQueries.phone}, ${MediaQueries.phoneSmall} {
    max-width: 30rem;
    max-height: 30rem;
  }

  @media ${MediaQueries.laptop} {
    max-width: 40rem;
    max-height: 40rem;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
