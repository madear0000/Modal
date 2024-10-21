import React from "react";
import styled from "@emotion/styled";

interface ModalContentProps {
  children: React.ReactNode;
}

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 1001;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return <Content>{children}</Content>;
};
