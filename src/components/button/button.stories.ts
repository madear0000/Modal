import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "./ button.types";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Кнопка",
    colorScheme: "primary",
    sizeOfButton: "md",
    variant: "solid",
  },
};
