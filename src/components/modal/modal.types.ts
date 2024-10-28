import React from "react";

export interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;

  onClose: () => void;

  clickOverlayClose?: boolean;

  clickEscapeClose?: boolean;

  isCentered?: boolean;

  sizeModal?: "sm" | "md" | "lg";
}

export interface ModalOverlayProps extends React.PropsWithChildren {}

export interface ModalContentProps extends React.PropsWithChildren {
  sizeModal?: "sm" | "md" | "lg";

  isCentered?: boolean;
}

export interface ModalHeaderProps extends React.PropsWithChildren {}

export interface ModalBodyProps extends React.PropsWithChildren {}

export interface ModalFooterProps extends React.PropsWithChildren {}

export interface ModalContextState {
  isOpen: boolean;

  onClose: () => void;

  sizeModal?: "sm" | "md" | "lg";

  isCentered?: boolean;
}
