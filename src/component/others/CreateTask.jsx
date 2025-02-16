import React, { useState } from 'react';


const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assign, setAssign] = useState('');
    const [category, setCategory] = useState('');

    const [newTask,setnewTask] = useState({})

    const submitHandle = (e) => {
        e.preventDefault();
    
        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            assign,
            category,
            categoryactive: false,
            newTask: true,
            failed: true,
            completed: false
        };
    
        // Pehle se stored employees ka data nikalna
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
    
        // Employee exist karta hai ya nahi check karna
        const updatedEmployees = employees.map((employee) => {
            if (employee.firstName === assign) {
                // Agar assign match kare to uske tasks me newTask add karo
                return {
                    ...employee,
                    tasks: [...(employee.tasks || []), newTask]
                };
            }
            return employee;
        });
    
        // Updated employees ko wapas localStorage me save karna
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    
        // Form fields reset karna
        setTaskTitle("");
        setCategory("");
        setAssign("");
        setTaskDate("");
        setTaskDescription("");
    
        console.log("Task Created Successfully!", newTask);
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Create New Task</h2>

            <form onSubmit={submitHandle} className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium">Task Title</label>
                        <input
                            value={taskTitle}
                            type="text"
                            onChange={(e) => setTaskTitle(e.target.value)}
                            placeholder="Make a UI design"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Date</label>
                        <input
                            type="date"
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Assign to</label>
                        <input
                            type="text"
                            value={assign}
                            onChange={(e) => setAssign(e.target.value)}
                            placeholder="Employee name"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Category</label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Design, Dev, etc."
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="block text-gray-600 font-medium">Description</label>
                    <textarea
                        rows="6"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        placeholder="Enter task details..."
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <div className="col-span-2 flex justify-end">
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
