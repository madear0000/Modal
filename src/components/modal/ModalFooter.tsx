import React from "react";
import styled from "@emotion/styled";

interface ModalFooterProps {
  children: React.ReactNode;
}

const Footer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

export const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return <Footer>{children}</Footer>;
};
