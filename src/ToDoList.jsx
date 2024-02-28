import React, { useEffect, useState } from "react";

export default function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleInputChange = (event) => {
        setNewTask(event.target.value)
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function upTask(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] =
                [updatedTask[index - 1], updatedTask[index]]
            setTasks(updatedTask)
        }
    }

    const downTask = (index) => {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] =
                [updatedTask[index + 1], updatedTask[index]]
            setTasks(updatedTask)
        }
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" placeholder="Enter a task"
                    value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-button"
                            onClick={() => upTask(index)}>
                            ☝
                        </button>
                        <button className="move-button"
                            onClick={() => downTask(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}
