import React, { Component, useState } from "react";

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