import { forwardRef } from "react";
import { useEffect } from "react";
import { ModalProps } from "./modal.types";
import { ModalProvider } from "./modal-context";

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const { isOpen, onClose, children, closeOverlayClose, closeEscapeClose } =
    props;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      console.log("close");
      if (event.key === "Escape" && closeEscapeClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      if (isOpen) {
        document.removeEventListener("keydown", handleEscape);
      }
    };
  }, [isOpen, closeEscapeClose, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalProvider
      isOpen={isOpen}
      onClose={onClose}
      closeOverlayClose={closeOverlayClose}
      ref={ref}
    >
      {children}
    </ModalProvider>
  );
});
