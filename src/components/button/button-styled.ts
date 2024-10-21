import styled from "@emotion/styled";
import { ButtonOwnProps } from "./ button.types";

const colors = {
  primary: {
    default: "#007bff",
    hover: "#a7cffa",
  },
  secondary: {
    default: "#6c757d",
    hover: "#5a6268",
  },
  danger: {
    default: "#dc3545",
    hover: "#c82333",
  },
  neutral: {
    default: "#e0e0e0",
    disabled: "#e0e0e0",
    text: "black",
    disabledText: "#a0a0a0",
  },
};

const StyledButton = styled.button<ButtonOwnProps>`
  padding: 15px 30px;
  border-radius: 4px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease, opacity 0.3s ease;

  background-color: ${({ colorScheme }) =>
    colors[colorScheme || "primary"].default};
  color: ${({ colorScheme }) => (colorScheme ? "white" : colors.neutral.text)};

  ${({ variant, colorScheme }) => {
    const scheme = colorScheme || "primary";

    if (variant === "outline") {
      return `
        background-color: transparent;
        border: 2px solid ${colors[scheme].default};
        color: ${colors[scheme].default};
      `;
    }

    if (variant === "ghost") {
      return `
        background-color: transparent;
        color: ${colors[scheme].default};
      `;
    }

    if (variant === "link") {
      return `
        padding: 0;
        background-color: transparent;
        color: ${colors[scheme].default};
        text-decoration: underline;
      `;
    }
  }}

  &:hover {
    ${({ colorScheme, variant }) => {
      const scheme = colorScheme || "primary";
      if (variant !== "link") {
        return `background-color: ${colors[scheme].hover};`;
      }
      return "";
    }}
  }

  ${({ sizeOfButton }) =>
    sizeOfButton === "sm" &&
    `
      padding: 10px 20px;
      font-size: 14px;
    `}

  ${({ sizeOfButton }) =>
    sizeOfButton === "lg" &&
    `
      padding: 20px 40px;
      font-size: 18px;
    `}

  &:disabled {
    background-color: ${colors.neutral.disabled};
    color: ${colors.neutral.disabledText};
    cursor: not-allowed;
  }

  .icon {
    margin: 10px;
  }
`;

export default StyledButton;
