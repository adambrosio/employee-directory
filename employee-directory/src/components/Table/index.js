function EmployeeTable(props) {
    const { employees } = props;
    return (
        <table>
            <caption>Employee Directory</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.position}</td>
                        <td>{employee.department}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}