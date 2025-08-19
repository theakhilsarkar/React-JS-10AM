import React, { useState, useEffect } from "react";
import "./Dashboard.css";

import axios from "axios";
import { useSelector } from "react-redux";

export default function Dashboard() {

  const {books} = useSelector((state))

  return (
    <div className="dashboard">
      <div className="box" >
        <h2>{}</h2>
        <h3>Total Books</h3>
      </div>
    </div>
  );
}

// redux toolkit - store
