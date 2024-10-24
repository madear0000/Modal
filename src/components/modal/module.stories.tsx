import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./modal";
import { ModalContent } from "./modalContent";
import { ModalHeader } from "./modalHeader";
import { ModalBody } from "./modalBody";
import { ModalFooter } from "./modalFooter";
import { ModalCloseButton } from "./modalCloseButton";
import { ModalOverlay } from "./modalOverlay";
import { ModalProps } from "./modal.types";
import Button from "../button/Button";

const meta: Meta = {
  title: "Components / Modal",
  argTypes: {
    sizeModal: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    isCentered: {
      control: { type: "boolean" },
      defaultValue: true,
    },
  },
};

export default meta;

export const Basic: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div>
      <Button colorScheme="primary" onClick={onOpen} variant="outline">
        Open
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent sizeModal={args.sizeModal} isCentered={args.isCentered}>
          <ModalHeader>
            Modal
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>footer</ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
