import React, {useState} from 'react';
import { TodoList } from './TodoList';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [checkedTasks, setCheckedTasks] = useState({});
    const [newTask, setNewTask] = useState("");
    const addTask = () => {
        if (newTask.trim() === "") {
            alert("List cannot be empty!");
            return;
        } 
        // Add new task with an unchecked state in checkedTasks 
        const taskId = tasks.length;
        setTasks([{ id: taskId, text: newTask }, ...tasks]); // Add the task at the beginning of the list
        // setTasks((prevTasks) => [...prevTasks, { id: taskId, text: newTask }]); // Add task object
        setCheckedTasks((prevState) => ({
            ...prevState,
            [taskId]: false, // Initialize the new task as unchecked
        }));
        setNewTask(""); // clear the input field
    }
    const handleCheckboxChange = (index) => {// Handle checkbox state change
        setCheckedTasks((prevState) => ({
        ...prevState,
        [index]: !prevState[index], // Toggle checked state
        }));
    }
    return (
        <>
            <h1>To-Do List</h1>
            <input type="text" autoComplete="off" placeholder="Add a new list..." value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <TodoList 
                tasks={tasks} 
                checkedTasks={checkedTasks} 
                handleCheckboxChange={handleCheckboxChange}  
            />
        </>
    )
}
export default TodoApp;
