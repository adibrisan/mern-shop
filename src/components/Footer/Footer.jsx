import React from "react";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGoogleSquare,
  AiOutlinePhone,
} from "react-icons/ai";
import { MdOutlineRoom } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./Footer.style";
import { Colors } from "../../environment/theme/Colors";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Chowder</Logo>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <AiFillFacebook size={30} color={Colors.chambray} />
          </SocialIcon>
          <SocialIcon>
            <AiFillTwitterSquare size={30} color={Colors.cheriseRed} />
          </SocialIcon>
          <SocialIcon>
            <AiFillGoogleSquare size={30} color={Colors.pictonBlue} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MdOutlineRoom style={{ marginRight: "10px" }} />
          Col. olt 5
        </ContactItem>
        <ContactItem>
          <AiOutlinePhone style={{ marginRight: "10px" }} />
          +40 770 260 451
        </ContactItem>
        <ContactItem>
          <FaAddressBook style={{ marginRight: "10px" }} />
          adi.brisan@yahoo.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
