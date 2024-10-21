import React from "react";
import styled from "@emotion/styled";

interface ModalHeaderProps {
  children: React.ReactNode;
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
  return (
    <Header>
      <h2>{children}</h2>
    </Header>
  );
};
