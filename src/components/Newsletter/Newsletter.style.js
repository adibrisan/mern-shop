import styled from "styled-components";

import { Colors } from "../../environment/theme/Colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
  background-color: ${Colors.fantasy};
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  width: 50%;
  height: 40px;
  background-color: ${Colors.white};
`;
export const Input = styled.input`
  flex: 8;
  padding-left: 20px;
  border: none;
`;
export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: ${Colors.teal};
`;
