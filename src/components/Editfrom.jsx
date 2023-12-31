import React, {  useState } from "react";
import { Button, FormLabel, Input, useToast } from "@chakra-ui/react";
import axios from "axios";


const initState = {
  task: "",
  description: "",
};

function Editfrom({post_Id,onClose}) {
  const [formData, setFormData] = useState(initState);

  const toast = useToast()
  const result = Object.entries(formData)
  .filter(([key, value]) => value !== "")
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});


  // Post request FE to DealersModel

  const handle_post_submiting_from = async () => {
  

    try {
        let res = await axios.put(
          `https://kodertroop-server.onrender.com/todo/${post_Id}`,
          result
        );
      
  
        toast({
          title: `${res.data}`,
  
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top-left',
  
        })
        onClose()
      } catch (err) {
        console.log(err);
      }
 

        
  

  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="input_form" style={{
          marginTop:"20px"
        }}>
          <FormLabel>Edit Task</FormLabel>
          <Input
            placeholder={"Enter Task"}
            type="text"
            onChange={(e) => setFormData({ ...formData, task: e.target.value })}
            required
            mb={10}
            style={{
              border:"2px solid black"
             }}
          />
          <FormLabel> Edit Description</FormLabel>

          <Input
            placeholder={"Enter Description"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
            mb={10}
            style={{
              border:"2px solid black"
             }}
          />

          <Button colorScheme="whatsapp" onClick={handle_post_submiting_from}> Submit </Button>
        </div>
      </div>
    </div>
  );
}

export default Editfrom;
