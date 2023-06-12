import React, { useEffect, useState } from "react";
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
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react";
import Add_form from "./Add_form";
import { DeleteIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

import "./style.css";
import Admin_Edit from "./Admin_Edit";
import DeleteModel from "./DeleteModel";
function Add_Todo_Madel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getsearchData, setgetsearchData] = useState();
  const [getdefaultData, setgetdefaultData] = useState();
  const [search, setsearch] = useState("");



  useEffect(() => {
    getdefaultdata();
  }, [getdefaultData]);

  const getsearchdata = async () => {
    try {
      const searchres = await axios(
        `https://koder-troop-server.vercel.app/todo/search/${search}`
      );

      setgetsearchData(searchres.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (search !== "") {
    getsearchdata();
  }

  const getdefaultdata = async () => {
    try {
      const res = await axios(`https://koder-troop-server.vercel.app/todo`);
      setgetdefaultData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <div className="heading">
        <h1> TO-DO Application </h1>
      </div>
      <div id="topsection">
        
        <Button onClick={onOpen} colorScheme="whatsapp" ml={10} >
          Create TODO
        </Button>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.800" />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Search Task"
            onChange={(e) => setsearch(e.target.value)}
            w={500}
           style={{
            border:"2px solid black"
           }}
          />
        </InputGroup>

      </div>


      <div
        style={{
          margin: "auto",
        }}
      >
        {search !== "" ? (
          <div className="parentBox">
            {getsearchData?.map((el, index) => {
              return (
                <div key={index} className="card">
                  <div className="cardicon">
                    <Admin_Edit post_Id={el?._id} />
                    <DeleteModel post_Id={el?._id} />
                  </div>

                  <p>
                  
                  Task No - <span className="titlename"> {index + 1}</span> 
                  </p>
                  <p>
                  
                  Task - <span className="titlename"> {el.task}</span> 
                  </p>
                  <p>
                  Discription - <span className="titlename"> {el.description} </span>
                    
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="parentBox">
            {getdefaultData?.map((el, index) => {
              return (
                <div key={index} className="card">
                  <div className="cardicon">
                    <Admin_Edit post_Id={el?._id} />

                    <DeleteModel post_Id={el?._id} />
                  </div>

                  <p>
                  
                  Task No - <span className="titlename"> {index + 1}</span> 
                  </p>

                  <p>
                  
                  Task - <span className="titlename"> {el.task}</span> 
                  </p>
                  <p>
                  Discription -
                    <span className="titlename">{el.description} </span>
                    
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TODO form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Add_form close={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Add_Todo_Madel;
