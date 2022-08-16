import React from "react";

import { Input as InputContainer } from "./Input.style";

const Input = (props) => {
  return (
    <InputContainer
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      {...props}
    />
  );
};

export default Input;
