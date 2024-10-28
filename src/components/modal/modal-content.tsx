import { forwardRef } from "react";
import { ModalContentProps } from "./modal.types";
import { useModalContext } from "./modal-context";
import { Content } from "./modal-styled";
import React from "react";

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  (props, ref) => {
    const { sizeModal, isCentered } = useModalContext();
    return (
      <Content
        sizeModal={sizeModal}
        isCentered={isCentered}
        ref={ref}
        {...props}
      />
    );
  },
);
