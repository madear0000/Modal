import { forwardRef } from "react";
import { ModalBodyProps } from "./modal.types";
import { Body } from "./modal-styled";

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  (props, ref) => {
    return <Body ref={ref} {...props} />;
  },
);
