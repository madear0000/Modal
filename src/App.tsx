import React from "react";
import { useState } from "react";
import { Modal } from "./components/modal/modal";
import { ModalOverlay } from "./components/modal/modalOverlay";
import { ModalContent } from "./components/modal/modalContent";
import { ModalHeader } from "./components/modal/modalHeader";
import { ModalBody } from "./components/modal/modalBody";
import { ModalFooter } from "./components/modal/modalFooter";
import { ModalCloseButton } from "./components/modal/modalCloseButton";
import Button from "./components/button/Button";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div>
      <Button colorScheme="primary" onClick={onOpen} variant="outline">
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent sizeModal="lg" isCentered>
          <ModalHeader>
            Modal Title
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae repellendus quia, dolore repellat ipsum voluptas cum
              perferendis, et dolor sapiente quisquam id sint obcaecati at
              quidem reiciendis ex odio facere?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="primary" onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default App;
