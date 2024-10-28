import styled from "@emotion/styled";
import { ModalContentProps } from "./modal.types";
import React from "react";

export const Body = styled.div`
  margin-top: 20px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 0;
  margin-right: 20px;
  transition: 0.5s;
  &:hover {
    border-radius: 8px;
    background-color: #e9e9e9;
  }
`;

export const Content = styled.div<ModalContentProps>`
  position: fixed;
  top: ${({ isCentered }) => (isCentered ? "50%" : "30%")};
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 1001;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  width: ${({ sizeModal }) =>
    sizeModal === "sm"
      ? "300px"
      : sizeModal === "md"
      ? "500px"
      : sizeModal === "lg"
      ? "700px"
      : "500px"};
`;

export const Footer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
