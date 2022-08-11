import styled from "styled-components";

import { Colors } from "../../environment/theme/Colors";

export const Info = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex: 1 0 1;
  align-items: center;
  justify-content: center;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  background-color: ${Colors.polar};
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    transition: all 0.8s ease;
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${Colors.white};
  position: absolute;
`;
export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${Colors.white};
  transition: all 0.5s ease;

  &:hover {
    background-color: ${Colors.catskillWhite};
    transform: scale(1.2);
  }
`;
