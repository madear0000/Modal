import { forwardRef } from "react";
import { useEffect } from "react";
import { ModalProps } from "./modal.types";
import { ModalProvider } from "./modal-context";
import ReactDOM from "react-dom";
import React from "react";

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    isOpen,
    onClose,
    children,
    clickOverlayClose,
    clickEscapeClose,
    sizeModal,
    isCentered,
  } = props;

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      console.log("any");
      if (event.key === "Escape" && clickEscapeClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, clickEscapeClose, onClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalProvider
      isOpen={isOpen}
      onClose={onClose}
      clickOverlayClose={clickOverlayClose}
      sizeModal={sizeModal}
      isCentered={isCentered}
    >
      <div ref={ref}>{children}</div>
    </ModalProvider>,
    document.body,
  );
});
