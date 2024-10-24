import { forwardRef } from "react";
import { ModalFooterProps } from "./modal.types";
import { Footer } from "./modal-styled";

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  (props, ref) => {
    return <Footer ref={ref} {...props} />;
  },
);
