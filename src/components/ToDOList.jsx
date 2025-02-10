import React, { useState } from "react";


function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function toggleTaskCompletion(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    return (
        
        <div className="d-flex justify-content-center container mt-5 width-90"style={{ width: "100%" }}>
            <div className="card shadow-lg p-4"style={{ width: "80%" }}>
                <h1 className="text-center mb-4">To-Do List</h1>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-primary" onClick={addTask}>Add</button>
                </div>

                <ol className="list-group">
                    {tasks.map((task, index) => (
                        <li key={index} className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'bg-success text-white' : ''}`}>
                            <span className={task.completed ? "text-decoration-line-through" : ""}>{task.text}</span>
                            <div>
                                <button className={`btn btn-${task.completed ? 'secondary' : 'success'} btn-sm me-2`} onClick={() => toggleTaskCompletion(index)}>
                                    {task.completed ? "Undo" : "Done"}
                                </button>
                                <button className="btn btn-danger btn-sm me-2" onClick={() => deleteTask(index)}>
                                    Delete
                                </button>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => moveTaskUp(index)}>
                                    ▲
                                </button>
                                <button className="btn btn-info btn-sm" onClick={() => moveTaskDown(index)}>
                                    ▼
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
