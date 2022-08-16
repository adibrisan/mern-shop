import React from "react";

import { Button as Container } from "./Button.style";

const Button = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Button;
