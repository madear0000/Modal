import React from "react";
import { useState } from "react";
import Button from "./components/button/button";
import { Modal } from "./components/modal/modal";
import { ModalOverlay } from "./components/modal/modal-overlay";
import { ModalContent } from "./components/modal/modal-content";
import { ModalHeader } from "./components/modal/modal-header";
import { ModalBody } from "./components/modal/modal-body";
import { ModalFooter } from "./components/modal/modal-footer";
import { ModalCloseButton } from "./components/modal/modal-close-button";

const App: React.FC = () => {
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
        clickOverlayClose={true}
        clickEscapeClose={true}
        sizeModal="md"
        isCentered={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Modal
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>Moda</ModalBody>
          <ModalFooter>Mod</ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default App;
