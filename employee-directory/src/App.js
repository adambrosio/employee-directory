import React, { Component, useState } from 'react';
import Table from "./components/Table";
import './App.css';

const tableData = [
  {
      name: "Michael Jordan",
      email: "mj23@bulls.com",
      position: "Guard",
      department: "NBA"
  },
  {
      name: "Scotty Pippen",
      email: "scottyp33@bulls.com",
      position: "Forward",
      department: "NBA"
  },
  {
      name: "Denis Rodman",
      email: "drodman91@bulls.com",
      position: "Center",
      department: "NBA"
  },
  {
    name: "Wayne Gretzky",
    email: "thegreatone@rangers.com",
    position: "Center",
    department: "NHL"
},
{
  name: "Tomy Brady",
  email: "tbrady@bucs.com",
  position: "Quarterback",
  department: "NFL"
}
];

const App = () => (
  <div className="text-center">
    <h4>Employee Directory</h4>
    <p>Click on icon to sort</p>

    <Table data={tableData} />
  </div>
)

export default App;
