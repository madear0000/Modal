import React, { createContext, useContext, useMemo } from "react";
import { ModalProps } from "./modal.types";
import { ModalContextState } from "./modal.types";

const ModalContext = createContext<ModalProps | undefined>(undefined);

export function useModalContext() {
  const ctx = useContext(ModalContext);

  if (ctx == null) {
    throw new Error("You should use ModalContext");
  }

  return ctx;
}

export const ModalProvider: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, children } = props;

  const contextValue = useMemo<ModalContextState>(
    () => ({
      isOpen,
      onClose,
    }),
    [isOpen, onClose],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};