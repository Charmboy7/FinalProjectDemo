import React, { useState, useEffect } from 'react';
import EmployeeService from '../Service/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployees()
            .then((response) => {
                const dataFromAPI = response.data;
                // Assuming dataFromAPI is an array of arrays representing employees/students
                const formattedData = dataFromAPI.map((employeeArray) => {
                    return {
                        id: employeeArray[0],
                        name: employeeArray[1],
                        course: employeeArray[2],
                        feeReceived: employeeArray[3],
                        paymentMethod: employeeArray[4]
                    };
                });
                setEmployees(formattedData);
            })
            .catch((error) => {
                console.error('Error fetching employees:', error);
            });
    }, []);

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Fee Received</th>
                            <th>Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.course}</td>
                                <td>{employee.feeReceived}</td>
                                <td>{employee.paymentMethod}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListEmployeeComponent;
