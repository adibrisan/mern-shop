import styled from "styled-components";

import { Colors } from "../../environment/theme/Colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  background-color: teal;
  color: ${Colors.white};
`;
