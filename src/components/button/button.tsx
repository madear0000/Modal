import React from "react";
import StyledButton from "./button-styled";
import { ButtonProps } from "./ button.types";

const Button: React.FC<ButtonProps> = (props) => {
  const { isDisabled, ...htmlProps } = props;

  return <StyledButton disabled={isDisabled} {...htmlProps} />;
};

export default Button;
