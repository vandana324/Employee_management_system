import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Check if the employees data exists in authData or localStorage
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));

    if (storedEmployees && Array.isArray(storedEmployees)) {
      setEmployees(storedEmployees);
    } else if (authData && authData.userData && Array.isArray(authData.userData.employees)) {
      setEmployees(authData.userData.employees);
    }
  }, [authData]);

  return (
    <div className="mt-10 rounded h-48 overflow-auto bg-[#1c1c1c]">
      <div className="bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 bg-red-600">Username</h2>
        <h2 className="w-1/5 bg-red-600">Task</h2>
        <h2 className="w-1/5 bg-red-600">Status</h2>
        <h2 className="w-1/5 bg-red-600">Completed</h2>
        <h2 className="w-1/5 bg-red-600">Failed</h2>
      </div>

      <div className="h-[80%] overflow-auto">
        {employees.length > 0 ? (
          employees.map((employee, index) => (
            <div
              key={index}
              className="bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 bg-red-600">{employee.firstName}</h2>
              <h2 className="w-1/5 bg-red-600">
                {employee.tasks.length} Tasks
              </h2>
              <h2 className="w-1/5 bg-red-600">
                {employee.tasks.some(task => !task.completed) ? "Active" : "Completed"}
              </h2>
              <h2 className="w-1/5 bg-red-600">
                {employee.tasks.filter(task => task.completed).length}
              </h2>
              <h2 className="w-1/5 bg-red-600">
                {employee.tasks.filter(task => task.failed).length}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No employees found</p>
        )}
      </div>
    </div>
  );
};

export default AllTask;
