import { forwardRef } from "react";
import { ModalOverlayProps } from "./modal.types";
import { Overlay } from "./modal-styled";
import { useModalContext } from "./modal-context";

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  (props, ref) => {
    const { closeOverlayClose, onClose } = useModalContext();

    const handleOverlayClose = () => {
      if (closeOverlayClose) {
        onClose();
      }
    };

    return <Overlay onClick={handleOverlayClose} ref={ref} {...props} />;
  },
);
