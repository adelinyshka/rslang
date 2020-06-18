import React from 'react';
import { Redirect } from "react-router-dom";

function Success() {
  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />
  }

  return <h2>user successfully created</h2>;
} 

export default Success;
