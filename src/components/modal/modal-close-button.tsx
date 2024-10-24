import React from "react";
import { useModalContext } from "./modal-context";

import { CloseButton } from "./modal-styled";

export const ModalCloseButton: React.FC = () => {
  const { onClose } = useModalContext();

  return <CloseButton onClick={onClose}>&times;</CloseButton>;
};
