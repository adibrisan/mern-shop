import styled from "styled-components";

import { Colors } from "../../../environment/theme/Colors";

export const Button = styled.button`
  min-width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: ${Colors.teal};
  color: ${Colors.white};
  cursor: pointer;

  &:disabled {
    color: ${Colors.amazon};
    cursor: not-allowed;
  }
`;
