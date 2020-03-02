import React, { Component } from "react";
import ReactDOM from "react-dom";
import PrettyLoaderSpinner from './PrettyLoadingSpinner';


const Form = ()=>{
  return (
    <div>
      <p>aaabbba</p>
      <PrettyLoaderSpinner/>
    </div>
  )
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
