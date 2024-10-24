import React from "react";

export interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;

  onClose: () => void;

  isCentered?: boolean;

  sizeModal?: "sm" | "md" | "lg";
}

export interface ModalContextState {
  isOpen: boolean;

  onClose: () => void;
}
