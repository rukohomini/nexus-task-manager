"use client";

import { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), title: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">My Task Manager</h1>

      <div className="flex mb-4 w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 p-2 border border-gray-300 rounded-l"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`flex-1 cursor-pointer ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
