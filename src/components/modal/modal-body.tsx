import { forwardRef } from "react";
import { ModalBodyProps } from "./modal.types";
import { Body } from "./modal-styled";
import React from "react";

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  (props, ref) => {
    return <Body ref={ref} {...props} />;
  },
);
