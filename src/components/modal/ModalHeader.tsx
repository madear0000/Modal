import React from "react";
import { ModalProps } from "./modal.types";
import { Header } from "./modal-styled";

export const ModalHeader: React.FC<ModalProps> = (props) => {
  const { children } = props;
  return (
    <Header>
      <h2>{children}</h2>
    </Header>
  );
};
