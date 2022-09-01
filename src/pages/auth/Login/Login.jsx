import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Button from "../../../components/core/Button/Button";
import Input from "../../../components/core/Input/Input";

import { login } from "../../../store/userActions";

import { Container, Wrapper, Title, Form, Link, Error } from "./Login.style";

const Login = () => {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login({ username, password }));
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            value={password}
            type="password"
            style={{ marginBottom: "10px" }}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button disabled={isFetching} onClick={handleLogin}>
            Login
          </Button>
          {error && <Error>Something went wrong.</Error>}
          <Link>Forgot password ?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
