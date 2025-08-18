import React, { useState, useEffect } from "react";
import "./Dashboard.css";

import axios from "axios";

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [fines, setFines] = useState([]);
  const [issue, setIssue] = useState([]);
  const [reservation, setReservation] = useState([]);

  function getData() {
    axios.get("http://localhost:3000/books").then((res) => setBooks(res.data));
    axios
      .get("http://localhost:3000/members")
      .then((res) => setMembers(res.data));
    axios.get("http://localhost:3000/fines").then((res) => setFines(res.data));
    axios.get("http://localhost:3000/issue").then((res) => setIssue(res.data));
    axios
      .get("http://localhost:3000/reservation")
      .then((res) => setReservation(res.data));
  }

  const data = [
    
  ];

  return (
    <div className="dashboard">
      <div className="box">
        <h2>12</h2>
        <h3>Total Books</h3>
      </div>
    </div>
  );
}
