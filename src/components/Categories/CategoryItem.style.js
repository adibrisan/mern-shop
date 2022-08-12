import styled from "styled-components";

import { MediaQueries } from "../../environment/theme/sizes";
import { Colors } from "../../environment/theme/Colors";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: ${Colors.white};

  @media ${MediaQueries.phone} {
    font-size: 15px;
  }
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: ${Colors.white};
  color: ${Colors.gray};
  cursor: pointer;
  font-weight: 600;

  @media ${MediaQueries.phone} {
    position: absolute;
    top: 70%;
  }
`;
