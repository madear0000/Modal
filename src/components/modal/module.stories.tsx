import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./modal";
import { ModalContent } from "./modal-content";
import { ModalHeader } from "./modal-header";
import { ModalBody } from "./modal-body";
import { ModalFooter } from "./modal-footer";
import { ModalCloseButton } from "./modal-close-button";
import { ModalOverlay } from "./modal-overlay";
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
      type: "boolean",
      control: { type: "boolean" },
      defaultValue: true,
    },
    overlayClose: {
      type: "boolean",
      control: { type: "boolean" },
      defaultValue: true,
    },
    escapeClose: {
      type: "boolean",
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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOverlayClose={args.overlayClose}
        closeEscapeClose={args.escapeClose}
      >
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
