import React from 'react';
import Table from "./components/Table";
import './App.css';

const tableData = [
  {
      name: "Michael Jordan",
      email: "mj23@bulls.com",
      position: "Guard",
      league: "NBA"
  },
  {
      name: "Scotty Pippen",
      email: "scottyp33@bulls.com",
      position: "Forward",
      league: "NBA"
  },
  {
      name: "Denis Rodman",
      email: "drodman91@bulls.com",
      position: "Center",
      league: "NBA"
  },
  {
    name: "Wayne Gretzky",
    email: "thegreatone@rangers.com",
    position: "Center",
    league: "NHL"
},
{
  name: "Brian Leetch",
  email: "bleetch2@rangers.com",
  position: "Defenseman",
  league: "NHL"
},
{
  name: "Tom Brady",
  email: "tbrady@bucs.com",
  position: "Quarterback",
  league: "NFL"
}
];

const App = () => (
  <div className="text-center">
    <h2>Employee Directory</h2>
    <h5>Click on icon to sort (in progress)</h5>

    <Table data={tableData} />
  </div>
)

export default App;
