import { forwardRef } from "react";
import { ModalContentProps } from "./modal.types";
import { Content } from "./modal-styled";

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  (props, ref) => {
    return <Content ref={ref} {...props} />;
  },
);
