import React from "react";

import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "./Newsletter.style";

import { AiOutlineSend } from "react-icons/ai";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <AiOutlineSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
