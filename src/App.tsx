import React, { useState } from "react";
import { Modal } from "./components/modal/Modal";
import { ModalOverlay } from "./components/modal/ModalOverlay";
import { ModalContent } from "./components/modal/ModalContent";
import { ModalHeader } from "./components/modal/ModalHeader";
import { ModalBody } from "./components/modal/ModalBody";
import { ModalFooter } from "./components/modal/ModalFooter";
import { ModalCloseButton } from "./components/modal/ModalCloseButton";
import Button from "./components/button/Button";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button colorScheme="primary" onClick={handleOpen} variant="outline">
        Open Modal
      </Button>

      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Modal Title
            <ModalCloseButton onClose={handleClose} />
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
            <Button colorScheme="primary" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default App;
