import React, { useState } from "react";
import { Button, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";

const initState = {
  task: "",
  description: "",

};

function Add_form({ close }) {
  const [formData, setFormData] = useState(initState);

  // Post request FE to DealersModel

  const handle_post_submiting_from = async () => {
    if (formData.description !== "" && formData.task !== "") {
      try {
        let res = await axios.post(
          `https://kodertroop-server.onrender.com/todo/add`,
          formData
        );

        alert(res.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Fill all details.");
    }

    close();
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
