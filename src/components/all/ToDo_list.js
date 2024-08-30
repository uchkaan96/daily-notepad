import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Wake up at 7am', completed: false },
    { id: 2, text: 'Meditate for 20 minutes', completed: false },
    { id: 3, text: 'Eat a healthy breakfast', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskItem = {
        id: tasks.length + 1,
        text: newTask,
        completed: false
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
    }
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleComplete(task.id)}
            />
            <span style={{ 
              textDecoration: task.completed ? 'line-through' : 'none',
              marginLeft: '10px'
            }}>
              {task.text}
            </span>
            <button 
              onClick={() => handleDelete(task.id)}
              style={{ marginLeft: 'auto' }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
    </div>
  );
};

export default ToDoList;
