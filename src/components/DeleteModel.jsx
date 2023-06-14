import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";


function DeleteModel({post_Id}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast()

  const handleDelete = async () => {
    try {
        const res = await axios.delete(
          `https://kodertroop-server.onrender.com/todo/delete/${post_Id}`
        );
        toast({
          title: `${res.data}`,
  
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top-right',
  
        })
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        onClose();
      }, 100);
  }

  return (
    <div>
      <DeleteIcon
        onClick={onOpen}
     
      />

      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You want to Delete TODO</ModalHeader>
         
          <ModalBody>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='orange' onClick={handleDelete} >Yes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default DeleteModel;