import { forwardRef } from "react";
import { ModalOverlayProps } from "./modal.types";
import { Overlay } from "./modal-styled";
import { useModalContext } from "./modal-context";
import React from "react";

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  (props, ref) => {
    const { clickOverlayClose, onClose } = useModalContext();

    const handleOverlayClose = () => {
      if (clickOverlayClose) {
        onClose();
      }
    };

    return (
      <Overlay
        data-testid="overlay"
        onClick={handleOverlayClose}
        ref={ref}
        {...props}
      />
    );
  },
);
