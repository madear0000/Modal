import React from "react";
import App from "../src/App";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { useState } from "react";
import { Modal } from "../src/components/modal/modal";
import { ModalContent } from "../src/components/modal/modal-content";
import { ModalHeader } from "../src/components/modal/modal-header";
import { ModalCloseButton } from "../src/components/modal/modal-close-button";
import { ModalOverlay } from "../src/components/modal/modal-overlay";
import Button from "../src/components/button/button";

const ModalTestComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={onOpen}>Open</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        clickOverlayClose={true}
        clickEscapeClose={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Modal
            <ModalCloseButton />
          </ModalHeader>
        </ModalContent>
      </Modal>
      );
    </div>
  );
};

describe("Modal", () => {
  it("opens modal on button click", async () => {
    render(<ModalTestComponent />);

    const button = screen.getByRole("button", { name: /open/i });

    await userEvent.click(button);

    expect(screen.getByText("Modal")).toBeInTheDocument();
  });
});
