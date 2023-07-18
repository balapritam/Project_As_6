import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={handleTaskChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
