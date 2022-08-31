import styled from "styled-components";

import { Colors } from "../../environment/theme/Colors";
import { MediaQueries } from "../../environment/theme/sizes";

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  @media ${MediaQueries.phone} {
    max-width: 2rem;
    max-height: 2rem;
  }
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  @media ${MediaQueries.phone} {
    margin-left: 1rem;
    max-width: 8rem;
    max-height: 2rem;
  }
`;

export const Input = styled.input`
  border: none;

  @media ${MediaQueries.phone} {
    max-width: 6.5rem;
  }
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;

  @media ${MediaQueries.phone} {
    display: none;
  }
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  @media ${MediaQueries.phone} {
    max-width: 2rem;
    max-height: 2rem;
  }
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  @media ${MediaQueries.phone} {
    display: flex;
  }
`;

export const CartNumber = styled.span`
  font-size: 10px;
  background: ${Colors.teal};
  color: #fff;
  padding: 0 5px;
  vertical-align: top;
  border-radius: 45%;

  @media ${MediaQueries.phone} {
    display: flex;
    align-items: center;
    height: 15px;
  }
`;
