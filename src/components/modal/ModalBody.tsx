import React from "react";
import { Body } from "./modal-styled";
import { ModalProps } from "./modal.types";

export const ModalBody: React.FC<ModalProps> = (props) => {
  const { children } = props;
  return <Body>{children}</Body>;
};
