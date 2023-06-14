import React, { useEffect, useState } from "react";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Stack,
  Button,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  keyframes,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
import { AiOutlineUser } from "react-icons/ai";

function User_Auth() {
  const [userdata, setuserdata] = useState();

  const size = "45px";
  const color = "teal";
  const navigate = useNavigate();

  const pulseRing = keyframes`
    0% {
      transform: scale(0.33);
    }
    40%,
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
    `;

  // get user
  let userId = localStorage.getItem("id");

  const add = () => {
    if (userId === null) {
      return false;
    } else if (userId !== "") {
      return true;
    }
  };

  let isAuthenticated = add();

  const getUser = async () => {
    try {
      const res = await axios(
        `https://koder-troop-server.vercel.app/singleuser/${userId}`
      );
      setuserdata(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    window.location.reload();
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Link to="/userLogin">
          {/* <StarIcon className="icon" /> */}
          <AiOutlineUser />
        </Link>
      ) : null}

      {isAuthenticated && (
        <Flex justifyContent="center">
          <Popover placement="bottom" isLazy>
            <PopoverTrigger>
              <Flex
                justifyContent="center"
                alignItems="center"
                h="216px"
                w="full"
                overflow="hidden"
              >
                <Box
                  as="div"
                  position="relative"
                  w={60}
                  h={size}
                
                
                >
                  

                  <div   style={{
                    display:"flex",
                
                    width:"auto"
                  }}>


                  <p>Username -{userdata?.username}</p>

                  <Button
                           
                     
                          
                            color={"white"}
                            colorScheme="whatsapp"
                            onClick={handleLogout}
                            ml={5}
                            >
                            Logout
                          </Button>
                              </div>

                </Box>
              </Flex>
            </PopoverTrigger>

         



          </Popover>
        </Flex>
      )}
    </div>
  );
}

export default User_Auth;
