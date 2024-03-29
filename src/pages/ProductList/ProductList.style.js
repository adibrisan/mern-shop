import styled from "styled-components";

import { MediaQueries } from "../../environment/theme/sizes";

export const Container = styled.div``;
export const Title = styled.h1`
  margin-left: 1rem;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
export const Filter = styled.div`
  margin: 20px;
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

  @media ${MediaQueries.phone} {
    margin-right: 5px;
  }
`;
