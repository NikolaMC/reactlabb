import Employee from "./Employee";
import React, { useState } from "react";

function EmployeeList() {
const [employees, setEmployees] = useState([
    { id: 1, name: "Employee1", email: "employee1@mail.com", phone: "0700000000", skills: "JS, CSS, HTML, React, Angular", avatar: "https://i.imgur.com/t9HFQvX.png" },
    { id: 2, name: "Employee2", email: "employee2@mail.com", phone: "0700000000", skills: "JS, CSS, HTML, C#, Java", avatar: "https://i.imgur.com/ebHfuth.png" },
    { id: 3, name: "Employee3", email: "employee3@mail.com", phone: "0700000000", skills: "JS, CSS, HTML, C++, Nodejs", avatar: "https://i.imgur.com/Q9qFt3m.png" }
]);

function handleAddEmployee() {
    let id = 4;

    setEmployees((prevEmployees) => {
        return [...prevEmployees, {
            id, name: `Employee${id}`, email: `employee${id}@mail.com`, phone: "0700000000", skills: "CSS, HTML, C#, C++, Java", avatar: "https://i.imgur.com/TUhCrsY.png"
        }];
    });

    id++;
}

    return (
        <>
            <button className="button" onClick={handleAddEmployee}>Add employee</button>
            <main className="container">
                <Employee key={employees.id} employeeData={employees} />
            </main>
        </>
    );
}

export default EmployeeList;