import React from "react";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonVariant = "solid" | "outline" | "ghost" | "link";

export type ButtonColor = "danger" | "primary" | "secondary";

export interface ButtonOwnProps {
  colorScheme?: ButtonColor;

  sizeOfButton?: ButtonSize;

  variant?: ButtonVariant;

  isDisabled?: boolean;
}

export interface ButtonProps
  extends React.HTMLProps<HTMLButtonElement>,
    ButtonOwnProps {}
