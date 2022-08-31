import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  CartNumber,
} from "./Navbar.style";
import { Colors } from "../../environment/theme/Colors";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

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
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Sign in</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <AiOutlineShoppingCart size={25} />
              <CartNumber>{quantity}</CartNumber>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
