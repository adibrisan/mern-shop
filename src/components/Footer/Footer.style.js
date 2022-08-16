import styled from "styled-components";

import { Colors } from "../../environment/theme/Colors";

export const Container = styled.div`
  display: flex;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1``;
export const Description = styled.p`
  margin: 20px 0px;
`;
export const SocialContainer = styled.div`
  display: flex;
`;
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${Colors.white};
  margin-right: 20px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

export const ListItem = styled.div`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Payment = styled.img`
  width: 50%;
`;