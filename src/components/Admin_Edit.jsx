import { EditIcon } from "@chakra-ui/icons";
import {
  ModalOverlay,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import Editfrom from "./Editfrom";

function Admin_Edit({post_Id}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <EditIcon
        onClick={onOpen}
     
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TODO Edit form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         
            <Editfrom post_Id={post_Id} onClose={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Admin_Edit;