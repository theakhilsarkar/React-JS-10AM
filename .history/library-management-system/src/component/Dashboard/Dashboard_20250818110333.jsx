import React, { useState, useEffect } from "react";
import "./Dashboard.css";

import axios from "axios";

export default function Dashboard() {

    

  function getData() {
    axios.get("http://localhost:3000/books").then((res)=>);
  }
  return (
    <div className="dashboard">
      <div className="box">
        <h2>12</h2>
        <h3>Total Books</h3>
      </div>
    </div>
  );
}
