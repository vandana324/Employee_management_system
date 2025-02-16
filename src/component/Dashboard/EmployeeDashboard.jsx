import React from "react";
import Header from "../others/header";
import TaskListNumber from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  // Check if data is available and has the id property
 

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">

      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber  data={props.data}/>
      <TaskList   data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
