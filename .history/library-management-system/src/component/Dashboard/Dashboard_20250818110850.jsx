import React, { useState, useEffect } from "react";
import "./Dashboard.css";

import axios from "axios";

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [fines, setFines] = useState([]);
  const [issue, setIssue] = useState([]);
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    getData();
  }, []);

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
    {
      title: "Total Books",
      count: books.length,
    },
    {
      title: "Total Members",
      count: members.length,
    },
    {
      title: "Total Fines",
      count: fines.length,
    },
    {
      title: "Total Issue",
      count: issue.length,
    },
    {
      title: "Total Reservation",
      count: reservation.length,
    },
  ];

  return (
    <div className="dashboard">
      {data.map((value) => (
        <div className="box">
          <h2>{value.count}</h2>
          <h3>{value.title}</h3>
        </div>
      ))}
    </div>
  );
}
