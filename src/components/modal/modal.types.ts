import React from "react";

export interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;

  onClose: () => void;

  closeOverlayClose?: boolean;

  closeEscapeClose?: boolean;
}

export interface ModalOverlayProps extends React.PropsWithChildren {}

export interface ModalContentProps extends React.PropsWithChildren {
  isCentered?: boolean;

  sizeModal?: "sm" | "md" | "lg";
}

export interface ModalHeaderProps extends React.PropsWithChildren {}

export interface ModalBodyProps extends React.PropsWithChildren {}

export interface ModalFooterProps extends React.PropsWithChildren {}

export interface ModalContextState {
  isOpen: boolean;

  onClose: () => void;
}
