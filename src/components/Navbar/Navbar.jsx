import React from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";

import {
  Box,
  Flex,
  Button,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import User_Auth from "./User_Auth";

const Links = [
  { url: "newCars", title: "New Cars" },
  { url: "secondHandCars", title: "Second Hand Cars" },

];

let Auth = true;

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("#DADBDD", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NavLink to="/">
              <Box mr={100}>
                <h1> <b>TODO</b> </h1>
              </Box>
            </NavLink>
            <HStack
              as={"nav"}
              spacing={30}
              display={{ base: "none", md: "flex" }}
              // border='1px' borderColor='gray.200'
              ml={50}
            >
             

            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
       
            <Menu>
              <User_Auth />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
             
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;