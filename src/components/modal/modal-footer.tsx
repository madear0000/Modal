import { forwardRef } from "react";
import { ModalFooterProps } from "./modal.types";
import { Footer } from "./modal-styled";
import React from "react";

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  (props, ref) => {
    return <Footer ref={ref} {...props} />;
  },
);
