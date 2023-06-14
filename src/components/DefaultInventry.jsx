import React, { useState } from "react";
import Admin_Edit from "./Admin_Edit";
import DeleteModel from "./DeleteModel";
import { Button, Select, useToast } from "@chakra-ui/react";
import axios from "axios";

function DefaultInventry({ el, index }) {
    const [select, setSelect] = useState('');
    const toast = useToast()

    const handle_process = (event) => {
      setSelect(event.target.value);
    };


    const handleStatus = async () => {
      const data = {
        imp:select
      }

      if(select !== ""){

        try {
          let res = await axios.put(`https://kodertroop-server.onrender.com/todo/imp/${el._id}`,data)
          
          toast({
            title: `${res.data}`,
    
            status: 'success',
            duration: 4000,
            isClosable: true,
            position: 'top',
    
          })
        } catch (error) {
          console.log(error)
        }
      }else{
        alert("Please select task status frist.")
      }
     
    }
  return (
    <div  className="card">
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
    <div >
    <Button size='xs' onClick={handleStatus} className="cardicon" colorScheme='facebook'>Change</Button>
    <Select size='xs' name="cars" id="cars" onChange={handle_process} w={40} style={{}}>
    <option >Select task status</option>
    
      <option value="IN PROGRESS">IN PROGRESS</option>
      <option value="IN QA">IN QA</option>
      <option value="DONE">DONE</option>
    </Select>
   
    </div>

  </div>
  );
}

export default DefaultInventry;
