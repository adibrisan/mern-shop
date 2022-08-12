import styled from "styled-components";

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
    margin-left: 2px;
    max-height: 2rem;
  }
`;

export const Input = styled.input`
  border: none;
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
`;
