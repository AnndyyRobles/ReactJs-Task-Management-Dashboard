import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [tasks, setTasks] = useState({ todo: [], doing: [], done: [] });
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const result = await axios.get('http://localhost:5000/tasks');
        setTasks(result.data);
      } catch (err) {
        console.error(err);
        setError('Error fetching tasks');
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await axios.put('http://localhost:5000/tasks', tasks);
      } catch (err) {
        console.error(err);
        setError('Error saving tasks');
      }
    };
    if (tasks) {
      saveTasks();
    }
  }, [tasks]);

  const addTask = (status) => {
    if (newTask.trim() !== '') {
      setTasks({ ...tasks, [status]: [...tasks[status], newTask] });
      setNewTask('');
    }
  };

  const removeTask = (status, index) => {
    const newTasks = tasks[status].filter((_, i) => i !== index);
    setTasks({ ...tasks, [status]: newTasks });
  };

  const moveTask = (from, to, index) => {
    const taskToMove = tasks[from][index];
    const newFromTasks = tasks[from].filter((_, i) => i !== index);
    const newToTasks = [...tasks[to], taskToMove];
    setTasks({ ...tasks, [from]: newFromTasks, [to]: newToTasks });
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Task Management Dashboard</h1>
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex space-x-4 justify-center w-full">
        {['todo', 'doing', 'done'].map((status) => (
          <div key={status} className="w-1/3 bg-white rounded-lg shadow-md">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold capitalize">{status}</h3>
                <i className="fas fa-ellipsis-h text-gray-500"></i>
              </div>
              {tasks[status].map((task, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg mb-4 border-l-4 border-blue-500">
                  <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                    <span>{task}</span>
                    <div className="flex space-x-2">
                      {status === 'todo' && (
                        <button
                          onClick={() => moveTask('todo', 'doing', index)}
                          className="text-blue-500"
                        >
                          Start
                        </button>
                      )}
                      {status === 'doing' && (
                        <button
                          onClick={() => moveTask('doing', 'done', index)}
                          className="text-green-500"
                        >
                          Done
                        </button>
                      )}
                      <button
                        onClick={() => removeTask(status, index)}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-2 border rounded mr-4"
          placeholder="New Task"
        />
        <button
          onClick={() => addTask('todo')}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add to To do
        </button>
      </div>
    </div>
  );
}

export default App;
