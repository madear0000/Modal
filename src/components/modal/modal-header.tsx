import { forwardRef } from "react";
import { ModalHeaderProps } from "./modal.types";
import { Header } from "./modal-styled";

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <Header ref={ref}>
        <h2>{children}</h2>
      </Header>
    );
  },
);
