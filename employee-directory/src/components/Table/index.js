import React, { Component, useState } from "react";

// const tableData = [
//     {
//         name: "Michael Jordan",
//         email: "mj23@bulls.com",
//         position: "Guard",
//         departemnt: "NBA"
//     },
//     {
//         name: "Scotty Pippen",
//         email: "scottyp33@bulls.com",
//         position: "Forward",
//         departemnt: "NBA"
//     },
//     {
//         name: "Denis Rodman",
//         email: "drodman91@bulls.com",
//         position: "Center",
//         departemnt: "NBA"
//     }
// ];

class Table extends Component {
	render() {
		const { data } = this.props;

		return (
			data.length > 0 && (
				<table className='text-left'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
                            <th>Position</th>
                            <th>Department</th>
						</tr>
					</thead>
					<tbody>
						{data.map(employee => (
							<tr>
								<td>{employee.name}</td>
								<td>{employee.email}</td>
                                <td>{employee.position}</td>
                                <td>{employee.department}</td>
							</tr>
						))}
					</tbody>
				</table>
			)
		);
	}
}

export default Table;