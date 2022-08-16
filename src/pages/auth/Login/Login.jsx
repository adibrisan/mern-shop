import React from "react";

import Button from "../../../components/core/Button/Button";
import Input from "../../../components/core/Input/Input";

import { Container, Wrapper, Title, Form, Link } from "./Login.style";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input style={{ marginBottom: "10px" }} placeholder="password" />
          <Button>Login</Button>
          <Link>Forgot password ?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
