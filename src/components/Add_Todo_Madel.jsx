import React from 'react'
import {
    ModalOverlay,
    useDisclosure,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
  } from "@chakra-ui/react";
import Add_form from './Add_form';
function Add_Todo_Madel() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
        <Button onClick={onOpen} colorScheme='whatsapp' p={5} mb={10}> Create TODO</Button>

       <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TODO form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Add_form close={onClose}/>
          </ModalBody>

      
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Add_Todo_Madel