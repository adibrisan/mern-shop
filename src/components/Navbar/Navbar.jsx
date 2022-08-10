import React from "react";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import {
  Container,
  Wrapper,
  Left,
  Language,
  Center,
  Right,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./Navbar.style";
import { Colors } from "../../environment/theme/Colors";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <AiOutlineSearch color={Colors.gray} size={20} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>CHOWDER</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <AiOutlineShoppingCart size={25} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
