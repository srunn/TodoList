import React from 'react';

export const TodoList = ({ tasks, checkedTasks, handleCheckboxChange }) => {
    return (
        <>
            {
                tasks.length > 0 && (
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id}>
                                <label htmlFor={task.id}>
                                    <input
                                        type="checkbox"
                                        id={task.id}
                                        checked={checkedTasks[task.id] || false} // Checked state for each task
                                        onChange={() => handleCheckboxChange(task.id)} // Calling the passed function
                                    />
                                    {task.text}
                                </label>
                            </li>
                        ))}
                    </ul>
                )
            }
        </>
    )
}
