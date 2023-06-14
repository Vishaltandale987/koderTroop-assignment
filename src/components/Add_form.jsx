import React, { useState } from "react";
import { Button, FormLabel, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let userId = localStorage.getItem("id");


const initState = {
  task: "",
  description: "",
  userID:userId
};

function Add_form({ close }) {
  const [formData, setFormData] = useState(initState);
  const navigate = useNavigate();
  // Post request FE to DealersModel
  let userId = localStorage.getItem("id");
  const toast = useToast()

  const handle_post_submiting_from = async () => {



  if(userId !== null){

  

    if (formData.description !== "" && formData.task !== "") {
      try {
        let res = await axios.post(
          `https://koder-troop-server.vercel.app/todo/add`,
          formData
        );

        toast({
          title: `${res.data}`,
  
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
  
        })
      } catch (err) {
        console.log(err);
      }
    } else {

      alert("Fill all details.");
    }

    close();
  }else{
    alert("Please login frist.")
    close();
    navigate("/userSignup");
  }

  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div
          className="input_form"
          style={{
            marginTop: "20px",
          }}
        >
          <FormLabel>Task</FormLabel>
          <Input
            placeholder={"Enter Task"}
            type="text"
            onChange={(e) => setFormData({ ...formData, task: e.target.value })}
            required
            mb={10}
            style={{
              border: "2px solid black",
            }}
          />
          <FormLabel>Description</FormLabel>

          <Input
            placeholder={"Enter Description"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
            mb={10}
            style={{
              border: "2px solid black",
            }}
          />

          <Button
            className="shareButton"
            colorScheme="whatsapp"
            onClick={handle_post_submiting_from}
          >
            {" "}
            Submit{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Add_form;
