import React from "react";
import { Route, Routes } from "react-router-dom";
import Add_Todo_Madel from "./Add_Todo_Madel";
import Sign_In from "./Sign_In";
import Sign_Up from "./Sign_Up";

function AllRouts() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Add_Todo_Madel />}></Route>        

        <Route path="/userLogin" element={<Sign_In />}></Route>
        <Route path="/userSignup" element={<Sign_Up />}></Route>
      </Routes>
    </div>
  );
}

export default AllRouts;