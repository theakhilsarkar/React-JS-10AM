import React, { useState, useEffect } from "react";
import "./Dashboard.css";

import axios from "axios";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="box" key={index}>
        <h2>{value.count}</h2>
        <h3>{value.title}</h3>
      </div>
    </div>
  );
}

// redux toolkit - store
