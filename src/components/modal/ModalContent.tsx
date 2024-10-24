import React from "react";
import { ModalProps } from "./modal.types";
import { Content } from "./modal-styled";

export const ModalContent: React.FC<ModalProps> = (props) => {
  const { children, ...htmlProps } = props;
  return <Content {...htmlProps}>{children}</Content>;
};
