import styled from "styled-components";

import { MediaQueries } from "../../environment/theme/sizes";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${MediaQueries} {
    justify-content: center;
  }
`;
