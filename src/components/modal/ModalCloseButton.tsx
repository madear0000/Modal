import React from "react";
import styled from "@emotion/styled";

interface ModalCloseButtonProps {
  onClose: () => void;
}

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-left: 355px;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({
  onClose,
}) => {
  return <CloseButton onClick={onClose}>&times;</CloseButton>;
};
