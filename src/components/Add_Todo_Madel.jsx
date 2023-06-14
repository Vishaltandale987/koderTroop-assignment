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
  Select,
} from "@chakra-ui/react";
import Add_form from "./Add_form";
import { AddIcon, DeleteIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

import "./style.css";
import DefaultInventry from "./DefaultInventry";
function Add_Todo_Madel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getsearchData, setgetsearchData] = useState([]);
  const [getdefaultData, setgetdefaultData] = useState([]);
  const [search, setsearch] = useState("");

  // console.log("getdefaultData",getdefaultData)

  let Default_TODO = getdefaultData?.filter((e) => e.important === "TODO");
  let Default_DONE = getdefaultData?.filter((e) => e.important === "DONE");
  let Default_IN_PROGRESS = getdefaultData?.filter(
    (e) => e.important === "IN PROGRESS"
  );
  let Default_IN_QA = getdefaultData?.filter((e) => e.important === "IN QA");

  let Search_TODO = getsearchData?.filter((e) => e.important === "TODO");
  let Search_DONE = getsearchData?.filter((e) => e.important === "DONE");
  let Search_IN_PROGRESS = getsearchData?.filter(
    (e) => e.important === "IN PROGRESS"
  );
  let Search_IN_QA = getsearchData?.filter((e) => e.important === "IN QA");

  useEffect(() => {
    getdefaultdata();
  }, [getdefaultData]);

  let userId = localStorage.getItem("id");


  const getsearchdata = async () => {
    try {
      const searchres = await axios(
        `https://koder-troop-server.vercel.app/todo/search/${search}/${userId}`
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
      const res = await axios(`https://koder-troop-server.vercel.app/todo/${userId}`);
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
        <Button leftIcon={<AddIcon />} onClick={onOpen} colorScheme="whatsapp" ml={10}>
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
              border: "2px solid black",
            }}
          />
        </InputGroup>
      </div>


      {
         getdefaultData.length !== 0 ? 
         
         
         <div
         style={{
           margin: "auto",
         }}
       >
         {search !== "" ? (
           <div className="parentBox">
               <div className="TODO">
               <p className="titlename" >TODO -  {Search_TODO?.length}</p>
 
               {Search_TODO?.map((el, index) => {
                 return <DefaultInventry key={index} el={el} index={index} />;
               })}
             </div>
 
             <div className="PROGRESS">
               <p className="titlename" >IN PROGRESS - {Search_IN_PROGRESS?.length}</p>
 
               {Search_IN_PROGRESS?.map((el, index) => {
                 return <DefaultInventry key={index} el={el} index={index} />;
               })}
             </div>
 
             <div className="QA">
               <p className="titlename" >IN QA - {Search_IN_QA?.length}</p>
 
               {Search_IN_QA?.map((el, index) => {
                 return <DefaultInventry key={index} el={el} index={index} />;
               })}
             </div>
 
             <div className="DONE">
               <p className="titlename" >DONE- {Search_DONE?.length}</p>
 
               {Search_DONE?.map((el, index) => {
                 return <DefaultInventry key={index} el={el} index={index} />;
               })}
             </div>
           </div>
         ) : (
           <div className="parentBox">
             <div className="TODO">
               <p className="titlename" >TODO -  {Default_TODO?.length}</p>
 
 
               {Default_TODO?.map((el, index) => {
                 return <DefaultInventry key={index} el={el} index={index} />;
               })}
             
             </div>
 
             <div className="PROGRESS">
               <p className="titlename" >IN PROGRESS - {Default_IN_PROGRESS?.length}</p>
 
               {Default_IN_PROGRESS?.map((el, index) => {
                 return <DefaultInventry key={index} el={el} index={index} />;
               })}
             </div>
 
             <div className="QA">
               <p className="titlename" >IN QA - {Default_IN_QA?.length}</p>
 
               {Default_IN_QA?.map((el, index) => {
                 return <DefaultInventry key={index} el={el} index={index} />;
               })}
             </div>
 
             <div className="DONE">
               <p className="titlename" >DONE- {Default_DONE?.length}</p>
 
               {Default_DONE?.map((el, index) => {
                 return <DefaultInventry key={index} el={el} index={index} />;
               })}
             </div>
           </div>
         )}
       </div>
         
         
         
         : 
         
         
         
         <p className="createtodo">Create TODO List</p>
      }

     

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
