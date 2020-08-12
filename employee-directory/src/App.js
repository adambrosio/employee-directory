import React, { Component, useState } from 'react';
import EmployeeTable from "./components/Table";
import './App.css';

class App extends Component {
  render() {

    const headings = [
      'Name',
      'Email',
      'Position',
      'Department'
    ];

    const rows = [
      [
        'Michael Jordan',
        'mj23@bulls.com',
        'Guard',
        'NBA'
      ],
      [
        'Scotty Pippen',
        'scotty33@bulls.com',
        'Forward',
        'NBA'
      ],
      [
        'Denis Rodman',
        'drodman91@bulls.com',
        'Center',
        'NBA'
      ]
    ];

    return (
      <EmployeeTable>

      </EmployeeTable>
    );
  }
}
export default App;
