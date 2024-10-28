import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { useState } from "react";
import { Modal } from "../src/components/modal/modal";
import { ModalContent } from "../src/components/modal/modal-content";
import { ModalHeader } from "../src/components/modal/modal-header";
import { ModalCloseButton } from "../src/components/modal/modal-close-button";
import { ModalOverlay } from "../src/components/modal/modal-overlay";

const ModalTestComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => setIsOpen(false);

  return (
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
};

describe("Modal", () => {
  it("close modal on button click", async () => {
    render(<ModalTestComponent />);

    expect(screen.getByText("Modal")).toBeInTheDocument();
    const closeButton = screen.getByTestId("close-button");

    await userEvent.click(closeButton);

    expect(screen.queryByText("Modal")).toBeNull();
  });

  it("check function onClose was caused", async () => {
    const onCLose = vi.fn();
    render(
      <div>
        <Modal isOpen={true} onClose={onCLose}>
          <ModalContent>
            <ModalHeader>
              Modal
              <ModalCloseButton />
            </ModalHeader>
          </ModalContent>
        </Modal>
      </div>,
    );
    expect(screen.getByText("Modal")).toBeInTheDocument();
    const closeButton = screen.getByTestId("close-button");

    await userEvent.click(closeButton);

    expect(onCLose).toHaveBeenCalled();
  });

  it("close modal on overlay click", async () => {
    render(<ModalTestComponent />);
    expect(screen.getByText("Modal")).toBeInTheDocument();
    const overlay = screen.getByTestId("overlay");

    await userEvent.click(overlay);

    expect(screen.queryByText("Modal")).toBeNull();
  });

  it("close modal by escape click", async () => {
    render(<ModalTestComponent />);
    expect(screen.getByText("Modal")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });

    expect(screen.queryByText("Modal")).toBeNull();
  });
});
