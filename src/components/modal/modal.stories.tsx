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
import Button from "../button/button";

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
      defaultValue: false,
    },
    clickOverlayClose: {
      type: "boolean",
      control: { type: "boolean" },
      defaultValue: false,
    },
    clickEscapeClose: {
      type: "boolean",
      control: { type: "boolean" },
      defaultValue: false,
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
        clickOverlayClose={args.clickOverlayClose}
        clickEscapeClose={args.clickEscapeClose}
        sizeModal={args.sizeModal}
        isCentered={args.isCentered}
      >
        <ModalOverlay />
        <ModalContent>
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
