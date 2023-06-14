import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const initState = {
  email: "",
  password: "",
};

function Sign_In() {
  const [formData, setFormData] = useState(initState);
  const navigate = useNavigate();
  const toast = useToast();



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handle_login_submiting_from = async () => {
    try {
      let res = await axios.post(`https://koder-troop-server.vercel.app/login`, formData);

  console.log(res.data)
      toast({
        position: "top",
        title: `You are Successfully login.`,
        // description: "done",
        status: "success",
        duration: 4000,
        isClosable: false,
      });
      
      localStorage.setItem('id',res.data.userID)
     

     
        setTimeout(() => {
          navigate("/");
        }, 2000);
     
      
     
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>

        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder=" Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button
                onClick={handle_login_submiting_from}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>

              <NavLink to="/userSignup">
                <Button
                  bg={"green"}
                  color={"white"}
                  _hover={{
                    bg: "green",
                  }}
                >
                  Sign up
                </Button>
              </NavLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Sign_In;