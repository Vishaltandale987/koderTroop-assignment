import React, {  useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import axios from "axios";


const initState = {
  task: "",
  description: "",
  important: false,
};

function Add_form({ close }) {
  const [formData, setFormData] = useState(initState);

  console.log(formData);

  // Post request FE to DealersModel

  const handle_post_submiting_from = async () => {
    try {
      let res = await axios.post(
        `https://serverside-qga2.vercel.app/dealers`,
        formData
      );

      //   alert("Car has been added.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="input_form">
          <Input
            placeholder={"Original Paint"}
            type="text"
            onChange={(e) => setFormData({ ...formData, task: e.target.value })}
            required
          />

          <Input
            placeholder={"Price"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />

          <Button className="shareButton"> Submit </Button>
        </div>
      </div>
    </div>
  );
}

export default Add_form;
