import React from "react";
import styled from "@emotion/styled";

interface ModalBodyProps {
  children: React.ReactNode;
}

const Body = styled.div`
  margin-top: 20px;
`;

export const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return <Body>{children}</Body>;
};
