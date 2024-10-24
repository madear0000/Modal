import React from "react";
import { ModalProps } from "./modal.types";
import { Footer } from "./modal-styled";

export const ModalFooter: React.FC<ModalProps> = (props) => {
  const { children } = props;
  return <Footer>{children}</Footer>;
};
