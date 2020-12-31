function Employee({ employeeData }) {
    return employeeData.map(function (employee) { 
        return (
            <>
                <div className="EmployeeDiv">
                    <img src={employee.avatar} className="avatar" alt=""/>
                    <h3>{employee.name}</h3>
                    <p><strong>E-mail: </strong>{employee.email}</p>
                    <p><strong>Phone: </strong>{employee.phone}</p>
                    <p><strong>Skills: </strong>{employee.skills}</p>
                </div>
            </>
        );
    });
}

export default Employee;