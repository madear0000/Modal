import React from "react";
import { ModalProps } from "./modal.types";
import { ModalProvider } from "./modalContext";

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, children } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <ModalProvider isOpen={isOpen} onClose={onClose}>
      {children}
    </ModalProvider>
  );
};
