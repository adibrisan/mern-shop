import styled from "styled-components";

import { MediaQueries } from "../../../environment/theme/sizes";
import { Colors } from "../../../environment/theme/Colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`;
export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: ${Colors.white};

  @media ${MediaQueries.phone} {
    width: 60%;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  width: 40%;
  padding: 10px;
  cursor: pointer;

  @media ${MediaQueries.phone} {
    width: 100%;
  }
`;
